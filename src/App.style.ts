import styled from 'styled-components'
import theme from './theme'

export const AppContainer = styled.div`
  min-height: 100vh;
  min-width: ${theme.popupWidth};
  margin: auto;
  background-color: ${theme.palette.bg};
  color: ${theme.palette.text};
`

export default { AppContainer }
