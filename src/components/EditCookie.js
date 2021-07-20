import EditIcon from '@material-ui/icons/Edit'

const EditButton = ({ cookieIndex, editHandler }) => {
  const clickHandler = () => {
    editHandler(cookieIndex)
  }

  return <EditIcon onClick={clickHandler} />
}
export default EditButton
