import styledComponents from 'styled-components'

export const Container = styledComponents.table`
`

export const Input = styledComponents.input`
  border: none;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: none;
  width: auto;
  background-color: #282c34;
  color: white;
`

export const ListHeader = styledComponents.div`
  display: flex;
`

export const TableHeader = styledComponents.th`
  border: 1px solid black;
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`

export const TableData = styledComponents.td`
  border: 1px solid black;
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`

export default { Container, Input, ListHeader, TableHeader, TableData }
