import styled from 'styled-components'
import theme from '../../theme'

const {
  cookieList: { columnWidth, numberOfColumns },
  palette,
} = theme

export const FormContainer = styled.div`
  grid-column: span ${numberOfColumns};
`

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(${numberOfColumns}, ${columnWidth});
  background-color: ${palette.darkBg};
`

export const Label = styled.h4`
  margin: 0;
`

export const Input = styled.input`
  width: 60%;
  display: inline;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid ${palette.input.border};
  box-sizing: border-box;
  outline: 0;
  outline-color: initial;
  background-color: ${palette.bg};
  color: ${palette.text};
  box-shadow: none;

  &:focus {
    border-color: ${palette.input.text};
  }
`

export const TextArea = styled.textarea`
  display: inline;
  margin: 0.2rem;
  padding: 0.5rem 0.3rem;
  border-radius: 3px;
  border: 1px solid ${palette.input.border};
  box-sizing: border-box;
  outline: 0;
  outline-color: initial;
  max-width: ${columnWidth};
  background-color: ${palette.bg};
  color: ${palette.text};
  box-shadow: none;

  &:focus {
    border-color: ${palette.input.text};
  }
`

export const FormItemContainer = styled.div`
  display: grid;
  justify-items: center;
  border-right: 1px solid ${palette.border};
  border-bottom: 1px solid ${palette.border};
  white-space: nowrap;
  overflow: hidden;
  width: ${columnWidth};
  padding: 0.5rem 0rem;
`

export const NoCookies = styled.h4`
  color: ${palette.danger};
`
