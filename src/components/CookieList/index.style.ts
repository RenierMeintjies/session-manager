import styled from 'styled-components'

export const Container = styled.table``

export const Input = styled.input`
  border: none;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: none;
  width: auto;
  background-color: #282c34;
  color: white;
`

export const ListHeader = styled.div`
  display: flex;
`

export const TableHeader = styled.th`
  border: 1px solid black;
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`

export const TableData = styled.td`
  border: 1px solid black;
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`

export default { Container, Input, ListHeader, TableHeader, TableData }
