import Form from './form'
import chromeApi from '../../api/chrome'

import { useState } from 'react'
import * as S from './style'
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Delete as DeleteIcon,
  FileCopy as CopyIcon,
  Edit as EditIcon,
} from '@material-ui/icons'

const CookieRow = ({ cookie }: any) => {
  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const handleCookieDelete = () => {
    if (window.confirm(`Are you sure you want to delete the '${cookie.name}' cookie for '${cookie.domain}'?`)) {
      chromeApi.deleteCookie(cookie)
    }
  }

  const handleEditCookie = () => {
    setEditMode(!editMode)
  }

  const handleValueCopy = () => {
    navigator.clipboard.writeText(cookie.value)
  }

  const handleValueToggle = () => {
    setVisible(!visible)
  }

  const VisibilityToggle = visible ? VisibilityIcon : VisibilityOffIcon

  return (
    <>
      <tr>
        <S.TableData>{cookie.domain}</S.TableData>
        <S.TableData>{cookie.name}</S.TableData>
        <S.TableData>
          <S.Input type={visible ? 'text' : 'password'} defaultValue={cookie.value} />
        </S.TableData>
        <S.TableData>
          <VisibilityToggle onClick={handleValueToggle} />
          <EditIcon onClick={handleEditCookie}></EditIcon>
          <CopyIcon onClick={handleValueCopy} />
          <DeleteIcon onClick={handleCookieDelete} />
        </S.TableData>
      </tr>
      {editMode && <Form data={cookie} />}
    </>
  )
}

export default CookieRow
