import { useState } from 'react'
import CookieRow from './CookieRow'
import CookieJar from '../CookieJar'
import chromeApi from '../../api/chrome'

import { useCookies } from '../../hooks/cookies'
import * as S from './style'
import { Delete as DeleteIcon } from '@material-ui/icons'

const CookieList = () => {
  const [overview, setOverview] = useState(false)
  const cookies = useCookies(overview)

  const handleDeleteAll = () => {
    if (window.confirm(`Are you sure you want to delete all cookies?`)) {
      cookies.forEach((cookie: any) => {
        chromeApi.deleteCookie(cookie)
      })
    }
  }

  const handleToggleClick = () => {
    setOverview(!overview)
  }

  return (
    <S.Container>
      <S.Cell>Key</S.Cell>
      <S.Cell>Value</S.Cell>
      <S.Cell>
        <CookieJar />
        {cookies.length > 0 && <DeleteIcon onClick={handleDeleteAll} />}
        <button onClick={handleToggleClick}>{overview ? 'current domain' : 'see all domains'}</button>
      </S.Cell>
      {cookies.length > 0 ? (
        cookies.map((cookie: any, index: any) => (
          <CookieRow key={`cookie-${cookie.domain}-${index}`} cookie={cookie} index={index} />
        ))
      ) : (
        <S.NoCookies>No cookies for you :c</S.NoCookies>
      )}
    </S.Container>
  )
}

export default CookieList
