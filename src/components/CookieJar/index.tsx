import { useState } from 'react'
import * as S from './style'

const CookieJar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  return (
    <S.Main>
      <S.DropDownContainer>
        <S.DropDownHeader onClick={toggling}>Jar</S.DropDownHeader>
        {isOpen && (
          <S.DropDownListContainer>
            <S.DropDownList>
              <S.ListItem>Facebook</S.ListItem>
              <S.ListItem>Youtube</S.ListItem>
              <S.ListItem>Github</S.ListItem>
            </S.DropDownList>
          </S.DropDownListContainer>
        )}
      </S.DropDownContainer>
    </S.Main>
  )
}
export default CookieJar
