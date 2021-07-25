import styled from 'styled-components'
import theme from './theme'

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  max-width: fit-content;
  background-color: ${theme.palette.bg};
  color: ${theme.palette.text};
`

export default { AppContainer }
