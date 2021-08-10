import { NoCookies } from './index.style'
import DynamicInput from './DynamicInput'

const Form = ({ data }: any) => {
  return (
    <>
      {data ? (
        Object.keys(data).map((_key: string) => {
          return <DynamicInput _key={_key} value={data[_key]} />
        })
      ) : (
        <NoCookies>no data</NoCookies>
      )}
    </>
  )
}

export default Form
