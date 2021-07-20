import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@material-ui/icons'

export const CookieValue = ({ value, index, onInputChange }) => {
  const [type, setType] = useState('text')
  const [_value, setValue] = useState(value)

  const togglePassword = () => {
    setType(type === 'password' ? 'text' : 'password')
  }
  const Icon = type === 'password' ? Visibility : VisibilityOff

  const handleInputChange = (el) => {
    // setValue(el.target.value)
    onInputChange(el.target.value, index)
  }

  return (
    <React.Fragment>
      <input id="value-input" type={type} value={_value} onChange={handleInputChange} />
      <Icon onClick={togglePassword} />
    </React.Fragment>
  )
}
