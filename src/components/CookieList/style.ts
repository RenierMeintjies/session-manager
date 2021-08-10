import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid black;
  border-right: 1px solid black;
  max-width: fit-content;
  min-width: max-content;
  width: 100%;
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
  display: grid;
  grid-template: header;
`

export const Title = styled.div``

export const Header = styled.div`
  border: 1px solid black;
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`

export const Data = styled.div`
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  padding: 1rem 0.5rem;
  /* max-width: fit-content;
  overflow: auto; */
`

export const NoCookies = styled.h4`
  color: red;
`

export default { Container, Input, ListHeader, Header, Data, Title }
