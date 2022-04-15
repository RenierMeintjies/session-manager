import { useState } from 'react'
import CookieRow from './CookieRow'
import chromeApi from '../../api/chrome'

import { useCookies } from '../../hooks/useCookies'
import * as S from './style'
import { Delete as DeleteIcon } from '@material-ui/icons'

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

  return (
    <S.Container>
      <S.Cell>Key</S.Cell>
      <S.Cell>Value</S.Cell>
      <S.Cell>
        {cookies.length > 0 && <DeleteIcon onClick={handleDeleteAll} />}
        <button onClick={handleToggleClick}>{seeAllDomains ? 'current domain' : 'see all domains'}</button>
      </S.Cell>
      {cookies.length > 0 ? (
        cookies.map((cookie: any, index: number) => {
          return <CookieRow key={`cookie-${index}-${cookie.domain}`} cookie={cookie} index={index} />
        })
      ) : (
        <S.NoCookies>No cookies for you :c</S.NoCookies>
      )}
    </S.Container>
  )
}

export default CookieList
