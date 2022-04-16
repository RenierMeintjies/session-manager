import styled from 'styled-components'
import theme from './theme'

const { palette } = theme

export const ActionsContainer = styled.div`
  padding-right: 8px;
`

export const Title = styled.h4``

export const AppContainer = styled.div`
  min-height: 100vh;
  min-width: ${theme.popupWidth};
  margin: auto;
  background-color: ${theme.palette.bg};
  color: ${theme.palette.text};
`

export const Header = styled.div`
  min-height: 60px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid ${palette.border};
`

export const Image = styled.img`
  padding-left: 8px;
`
