import styled from 'styled-components'
import theme from '../../theme'

const {
  cookieList: { columnWidth, numberOfColumns },
  palette,
} = theme

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, ${columnWidth});
  border-right: 1px solid ${palette.border};
`

export const Input = styled.input`
  border: none;
  text-align: center;
  width: 90%;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  background-color: ${palette.bg};
  color: ${palette.text};
`

export const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
`

export const Cell = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  border-right: 1px solid ${palette.border};
  border-bottom: 1px solid ${palette.border};
  white-space: nowrap;
  overflow: hidden;
  width: ${columnWidth};
  padding: 0.5rem 0rem;
`

export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1.5rem);
  justify-content: center;
  column-gap: 0.5rem;
  border-right: 1px solid ${palette.border};
  border-bottom: 1px solid ${palette.border};
  width: 100%;
  align-items: center;
`

export const Header = styled.div`
  border: 1px solid ${palette.border};
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`
