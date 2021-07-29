import styled from 'styled-components'

export const Container = styled.table`
  table-layout: auto;
  max-width: fit-content;
  min-width: max-content;
  width: 100%;
  border-collapse: collapse;

  tr:nth-child(even) {
    background-color: #3e4450;
  }

  tr:nth-child(even) > td > input {
    background-color: #3e4450;
  }
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
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
  border-bottom: 0.5px solid black;
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`

export const NoCookies = styled.h4``

export default { Container, Input, ListHeader, TableHeader, TableData }
