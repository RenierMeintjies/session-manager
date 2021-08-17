import { render } from '@testing-library/react'
import * as S from './style'

// - add button with listener
// - add function to handle button click and set state as correct view to render
// - add conditional logic in App.tsx to render either CookieList or CookieOverview

const CookieOverview = () => {
  return (
    <S.Container>
      <S.Window>Hello World</S.Window>
    </S.Container>
  )
}

export default CookieOverview
