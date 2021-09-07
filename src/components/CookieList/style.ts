import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3vw);
  border-top: 1px solid black;
  border-right: 1px solid black;
  max-width: fit-content;
  min-width: max-content;
  width: 100%;
`

export const Input = styled.input`
  border: none;
  text-align: center;
  width: 90%;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  background-color: #282c34;
  color: white;
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
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  min-width: 33.3vw;
`

export const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1.5rem);
  justify-content: center;
  column-gap: 0.5rem;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  align-items: center;
`

export const Header = styled.div`
  border: 1px solid black;
  padding: 0.5em 1em;
  max-width: fit-content;
  overflow: auto;
`

export const NoCookies = styled.h4`
  color: red;
`
