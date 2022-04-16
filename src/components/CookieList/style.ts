import styled from 'styled-components'
import theme from '../../theme'

const {
  cookieList: { columnWidth, numberOfColumns },
  palette,
} = theme

interface Props {
  domainView: boolean
}

export const Details = styled.details``

export const Summary = styled.summary`
  padding: 12px;
  border-bottom: 1px solid ${palette.border};
`

export const Container = styled.div`
  border-top: ${(props: Props) => (props.domainView ? 0 : 1)}px solid ${palette.border};
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

export const NoCookies = styled.h4`
  color: ${palette.danger};
`
export const Button = styled.button`
  border: 2px solid steelblue;
  color: white;
  position: relative;
  padding: 0.3rem ;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  animation-name: spin
  animation-iteration-count: infinite

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: -0.6rem;
    top: -0.5rem;
    z-index: -1;
    background-color: steelblue;
    transition: all 200ms ease-out;
  }

  &:active {
  animation: spin 640ms infinite;
  }

  @keyframes spin {
    0% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
    67% {
      transform: translate(0.4rem, -1.8rem) rotate(160deg) scale(0.4);
    }
    100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
    }
  }
`
