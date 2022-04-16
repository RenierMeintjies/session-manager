import * as S from './style'
import chromeApi from '../../api/chrome'
import CookieRow from './CookieRow'
import { ContactMail, Delete as DeleteIcon } from '@material-ui/icons'
import { useSiteCookies } from '../../hooks/useCookies'

interface CookieListProps {
  domain: string
}

export const CookieList = ({ domain }: CookieListProps) => {
  const cookies = useSiteCookies(domain)

  console.log('qq', cookies)
  const handleDeleteAll = () => {
    if (window.confirm(`Are you sure you want to delete all cookies?`)) {
      cookies.forEach((cookie: any) => {
        chromeApi.deleteCookie(cookie)
      })
    }
  }

  return (
    <S.Container>
      <S.Cell>Key</S.Cell>
      <S.Cell>Value</S.Cell>
      <S.Cell>
        <DeleteIcon onClick={handleDeleteAll} />
      </S.Cell>

      {cookies.map((cookie: any, index: number) => {
        return <CookieRow key={`cookie-${index}-${cookie.domain}`} cookie={cookie} index={index} />
      })}
    </S.Container>
  )
}

export default CookieList
