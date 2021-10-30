import { useState } from 'react'
import * as S from './style'

const CookieJar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // function that detects whether localStorage is both supported and available
  function storageAvailable(type: any) {
    let storage: any
    try {
      storage = window[type]
      let x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      )
    }
  }

  const toggling = () => setIsOpen(!isOpen)

  if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
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
  } else {
    // Too bad, no localStorage for us
    return <h1>OOF!</h1>
  }
}
export default CookieJar
