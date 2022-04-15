import * as S from './style'
import chromeApi from '../../api/chrome'
import CookieRow from './CookieRow'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { groupBy } from 'lodash'
import { useCookies } from '../../hooks/useCookies'
import { useState } from 'react'

const CookieList = () => {
  const [seeAllDomains, setSeeAllDomains] = useState(false)
  const cookies = useCookies(seeAllDomains)

  const handleDeleteAll = () => {
    if (window.confirm(`Are you sure you want to delete all cookies?`)) {
      cookies.forEach((cookie: any) => {
        chromeApi.deleteCookie(cookie)
      })
    }
  }

  const handleToggleClick = () => {
    setSeeAllDomains(!seeAllDomains)
  }

  const RenderCookieRows = ({ cookies }: any) => {
    return (
      <S.Container domainView={seeAllDomains}>
        <S.Cell>Key</S.Cell>
        <S.Cell>Value</S.Cell>
        <S.Cell>
          {cookies.length > 0 && <DeleteIcon onClick={handleDeleteAll} />}
          <button onClick={handleToggleClick}>{seeAllDomains ? 'current domain' : 'see all domains'}</button>
        </S.Cell>

        {cookies.map((cookie: any, index: number) => {
          return <CookieRow key={`cookie-${index}-${cookie.domain}`} cookie={cookie} index={index} />
        })}
      </S.Container>
    )
  }

  const RenderDomainRows = () => {
    const groupedCookies = groupBy(cookies, 'domain')

    return (
      <>
        {Object.keys(groupedCookies).map((domain: string, index: number) => {
          return (
            <S.Details>
              <S.Summary>{domain}</S.Summary>
              <RenderCookieRows cookies={groupedCookies[domain]} />
            </S.Details>
          )
        })}
      </>
    )
  }

  return (
    <>
      {cookies.length > 0 ? (
        seeAllDomains ? (
          <RenderDomainRows />
        ) : (
          <RenderCookieRows cookies={cookies} />
        )
      ) : (
        <S.NoCookies>No cookies for you :c</S.NoCookies>
      )}
    </>
  )
}

export default CookieList
