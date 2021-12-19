import * as S from './style'
import DynamicInput from './DynamicInput'

const Form = ({ data }: any) => {
  return (
    <S.FormContainer>
      <S.Form>
        {data ? (
          Object.keys(data).map((_key: string, index: number) => (
            <DynamicInput key={index} _key={_key} value={data[_key]} />
          ))
        ) : (
          <S.NoCookies>no data</S.NoCookies>
        )}
      </S.Form>
    </S.FormContainer>
  )
}

export default Form
