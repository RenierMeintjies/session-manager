import React, { useState } from 'react'
import chromeApi from '../../api/chrome'
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Delete as DeleteIcon,
  FileCopy as CopyIcon,
  Edit as EditIcon,
} from '@material-ui/icons'
import Form from './Form'

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
        <td>{cookie.domain}</td>
        <td>{cookie.name}</td>
        <td>
          <input id="value-input" type={visible ? 'text' : 'password'} value={cookie.value} />
        </td>
        <td style={{ display: 'flex', flexDirection: 'row' }}>
          <VisibilityToggle onClick={handleValueToggle} />
          <EditIcon onClick={handleEditCookie}></EditIcon>
          <CopyIcon onClick={handleValueCopy} />
          <DeleteIcon onClick={handleCookieDelete} />
        </td>
      </tr>
      {editMode && <Form cookie={cookie} />}
    </>
  )
}

export default CookieRow
