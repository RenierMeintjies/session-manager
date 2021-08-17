import { AppContainer } from './App.style'

import CookieList from './components/CookieList'
import CookieOverview from './components/CookieOverview'

const App = () => {
  // TODO: see CookieOverview files
  if (!CookieOverview) {
    return (
      <AppContainer>
        <CookieList />
      </AppContainer>
    )
  } else {
    return (
      <AppContainer>
        <CookieOverview />
      </AppContainer>
    )
  }
}

export default App
