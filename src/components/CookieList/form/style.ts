import styled from 'styled-components'

export const FormContainer = styled.tr`
  background-color: pink;
  display: flex;
`

export const Form = styled.div`
  display: grid;
  grid-template: '1fr 1fr 1fr';
  background-color: blue;
`

export const FormItemContainer = styled.div`
  background-color: #dee3ef;
  border: 1px solid red;
  margin-bottom: 2px;
  /* margin: 1rem 5rem; */
`

// export const Input = styled.input`
//   border: none;
//   border-bottom: 1px solid black;
//   display: inline;
//   font-family: inherit;
//   font-size: inherit;
//   padding: none;
//   width: auto;
//   background-color: #282c34;
//   color: white;
// `

// export const ListHeader = styled.div``

// export const TableHeader = styled.th`
//   border: 1px solid black;
//   padding: 0.5em 1em;
//   max-width: fit-content;
//   overflow: auto;
// `

// export const TableData = styled.td`
//   border-bottom: 0.5px solid black;
//   padding: 0.5em 1em;
//   max-width: fit-content;
//   overflow: auto;
// `

// export const NoCookies = styled.h4`
//   color: red;
// `

export const NoCookies = styled.h4`
  color: red;
`

export default { Form, FormItemContainer, NoCookies }
