import CookieRow from './CookieRow'
import chromeApi from '../../api/chrome'

import { useCookies } from '../../hooks/cookies'
import { Container, TableHeader, NoCookies } from './index.style'
import { Delete as DeleteIcon } from '@material-ui/icons'

const CookieList = () => {
  const cookies = useCookies()

  const handleDeleteAll = () => {
    if (window.confirm(`Are you sure you want to delete all cookies?`)) {
      cookies.forEach((cookie: any) => {
        chromeApi.deleteCookie(cookie)
      })
    }
  }

  return (
    <Container>
      <TableHeader>Domain</TableHeader>
      <TableHeader>Key</TableHeader>
      <TableHeader>Value</TableHeader>
      <TableHeader>{cookies.length > 0 && <DeleteIcon onClick={handleDeleteAll} />}</TableHeader>
      {cookies.length > 0 ? (
        cookies.map((cookie: any, index: any) => (
          <CookieRow key={`cookie-${cookie.domain}-${index}`} cookie={cookie} index={index} />
        ))
      ) : (
        <NoCookies>No cookies for you :c</NoCookies>
      )}
    </Container>
  )
}

export default CookieList
