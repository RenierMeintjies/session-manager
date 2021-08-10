import { inputData } from '../../interfaces'

const Input = ({ _key, value }: inputData) => {
  return (
    <span>
      <h4>{_key}:</h4>
      <input defaultValue={value.toString() || ''} />
    </span>
  )
}

const TextArea = ({ _key, value }: inputData) => {
  return (
    <span>
      <h4>{_key}:</h4>
      <textarea defaultValue={value.toString() || ''} />
    </span>
  )
}

const Checkbox = ({ _key, value }: inputData) => {
  return (
    <span>
      <h4>{_key}:</h4>
      <input type="checkbox" defaultValue={value.toString() || ''} />
    </span>
  )
}

const DynamicInput = ({ _key, value }: inputData) => {
  if (typeof value === 'string') {
    return value.length > 30 ? <TextArea _key={_key} value={value} /> : <Input _key={_key} value={value} />
  } else if (typeof value == 'boolean') {
    return <Checkbox _key={_key} value={value} />
  } else {
    return (
      <span>
        <h4>{_key}:</h4>
        <input defaultValue={value.toString() || ''} />
      </span>
    )
  }
}

export default DynamicInput
