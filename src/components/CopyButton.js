import React from 'react'
import FileCopyIcon from '@material-ui/icons/FileCopy'

export const CopyButton = ({ value }) => {
  const clickHandler = () => {
    navigator.clipboard.writeText(value)
  }

  return <FileCopyIcon onClick={clickHandler} />
}
