import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@material-ui/icons'
export const CookieValue = ({ value }) => {
  const [type, setType] = useState('password')

  const togglePassword = () => {
    setType(type === 'password' ? 'text' : 'password')
  }
  const Icon = type === 'password' ? Visibility : VisibilityOff

  return (
    <React.Fragment>
      <input className="value-input" type={type} value={value} />
      <Icon onClick={togglePassword} />
    </React.Fragment>
  )
}
