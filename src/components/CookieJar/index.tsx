import { useEffect, useState } from 'react'
import { useCookies } from '../../hooks/cookies'
import * as S from './style'

const useStateWithLocalStorage = (localStorageKey: string) => {
  const [value, setValue] = useState(localStorage.getItem(localStorageKey) || '')
  const cookies = useCookies(false)

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cookies))
  }, [value])

  return [value, setValue]
}

const CookieJar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value] = useStateWithLocalStorage('myValueInLocalStorage')

  const myStorage = sessionStorage.setItem('sessionStorageKey', value.toString())

  const toggling = () => setIsOpen(!isOpen)

  return (
    <S.Main>
      <S.DropDownContainer>
        <S.DropDownHeader onClick={toggling}>Jar</S.DropDownHeader>
        {isOpen && (
          <S.DropDownListContainer>
            <S.DropDownList>
              <S.ListItem>Storage{JSON.stringify(myStorage)}</S.ListItem>
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
