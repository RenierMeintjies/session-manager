import DeleteIcon from '@material-ui/icons/Delete'

const DeleteButton = ({ cookieIndex, deleteHandler }) => {
  const clickHandler = () => {
    deleteHandler(cookieIndex)
  }

  return <DeleteIcon onClick={clickHandler} />
}

export default DeleteButton
