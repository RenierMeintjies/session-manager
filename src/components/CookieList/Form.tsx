import { NoCookies } from './index.style'

interface inputData {
  _key: string
  value: number | string | boolean
}

const Form = ({ data }: any) => {
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
  const Datepicker = ({ _key, value }: inputData) => {
    return (
      <span>
        <h4>{_key}:</h4>
        <input type="date" defaultValue={value.toString() || ''} />
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
    } else {
      return (
        <span>
          <h4>{_key}:</h4>
          <input defaultValue={value.toString() || ''} />
        </span>
      )
    }

    // if (typeof value === 'string') {
    //   if (value.length > 30) {
    //     return <TextArea _key={_key} value={value} />
    //   } else {
    //     return <Input _key={_key} value={value} />
    //   }
    // } else {
    //   return (
    //     <span>
    //       <h4>{_key}:</h4>
    //       <input defaultValue={value.toString() || ''} />
    //     </span>
    //   )
    // }

    // switch (type) {
    //   case 'string':
    //   case 'longstring':
    //     return <TextArea _key={_key} value={value} />
    //   case 'date':
    //     return <Datepicker _key={_key} value={value} />
    //   case 'boolean':
    //     return <Checkbox _key={_key} value={value} />
    //   default:
  }

  return (
    <>
      {data ? (
        Object.keys(data).map((_key: string) => {
          return <DynamicInput _key={_key} value={data[_key]} />
        })
      ) : (
        <NoCookies>no data </NoCookies>
      )}
    </>
  )
}

export default Form
