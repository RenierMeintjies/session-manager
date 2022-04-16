import * as S from './style'
import { CookieList } from '../CookieList/index'
import { useAllCookies } from '../../hooks/useCookies'
import { Delete } from '@material-ui/icons'

const DomainList = ({ handleDomainSelect = (domain: string) => {} }) => {
  const cookies = useAllCookies(true)

  return (
    <>
      {Object.keys(cookies).map((domain: string) => {
        return (
          <S.Details>
            <S.Summary>
              <S.SummaryContent>{domain}</S.SummaryContent>
            </S.Summary>
            <CookieList domain={domain} />
          </S.Details>
        )
      })}
    </>
  )
}

export default DomainList
