import * as S from './App.style'
import CookieList from './components/CookieList'
import { useSiteCookies } from './hooks/useCookies'
import DomainList from './components/DomainList'
import logo from './assets/actual-cookie-cog-48.png'
import { FormatListBulletedSharp } from '@material-ui/icons'
import { useEffect, useState } from 'react'

const App = () => {
  const [showDomainList, setShowDomainList] = useState(false)
  const [domain, setDomain] = useState('')

  const handleToggleView = () => {
    setShowDomainList(!showDomainList)
  }

  const handleDomainSelect = (domain: string) => {
    setDomain(domain)
  }

  return (
    <S.AppContainer>
      <S.Header>
        <S.Image src={logo} alt="Logo" />
        <S.Title>Session Manager</S.Title>
        <S.ActionsContainer>
          <FormatListBulletedSharp onClick={handleToggleView} fontSize="large" />
        </S.ActionsContainer>
      </S.Header>
      {domain ? <CookieList domain={domain} /> : <DomainList handleDomainSelect={handleDomainSelect} />}

      {/* <CookieList domain={domain} /> */}
      {/* <DomainList handleDomainSelect={handleDomainSelect} /> */}
    </S.AppContainer>
  )
}

export default App
