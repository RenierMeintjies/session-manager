import { useState } from 'react'
import chromeApi from '../../api/chrome'
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Delete as DeleteIcon,
  FileCopy as CopyIcon,
  Edit as EditIcon,
} from '@material-ui/icons'
import Form from './Form'
import { Input } from './index.style'
import { TableData } from './index.style'

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
        <TableData>{cookie.domain}</TableData>
        <TableData>{cookie.name}</TableData>
        <TableData>
          <Input type={visible ? 'text' : 'password'} value={cookie.value} />
        </TableData>
        <TableData style={{ display: 'flex', flexDirection: 'row' }}>
          <VisibilityToggle onClick={handleValueToggle} />
          <EditIcon onClick={handleEditCookie}></EditIcon>
          <CopyIcon onClick={handleValueCopy} />
          <DeleteIcon onClick={handleCookieDelete} />
        </TableData>
      </tr>
      {editMode && <Form cookie={cookie} />}
    </>
  )
}

export default CookieRow
