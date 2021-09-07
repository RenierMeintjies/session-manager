import styled from 'styled-components'

export const FormContainer = styled.div`
  background-color: pink;
  grid-column: span 3;
`

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33vw);
  background-color: blue;
`

export const FormItemContainer = styled.div`
  background-color: #dee3ef;
  border: 1px solid green;
  margin-bottom: 2px;
`

export const NoCookies = styled.h4`
  color: red;
`
