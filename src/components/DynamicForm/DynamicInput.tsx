import { inputData } from '../../interfaces'
import { startCase } from 'lodash'
import * as S from './style'
import { useState } from 'react'

const Input = ({ _key, value }: inputData) => {
  return (
    <S.FormItemContainer>
      <S.Label>{startCase(_key)}:</S.Label>
      <S.Input defaultValue={value.toString() || ''} />
    </S.FormItemContainer>
  )
}

const TextArea = ({ _key, value }: inputData) => {
  return (
    <S.FormItemContainer>
      <S.Label>{startCase(_key)}:</S.Label>
      <S.TextArea defaultValue={value.toString() || ''} />
    </S.FormItemContainer>
  )
}

const Checkbox = ({ _key, value }: inputData) => {
  return (
    <S.FormItemContainer>
      <S.Label>{startCase(_key)}:</S.Label>
      <S.Input type="checkbox" defaultChecked={value as boolean} />
    </S.FormItemContainer>
  )
}

const DynamicInput = ({ _key, value }: inputData) => {
  if (typeof value === 'string') {
    return value.length > 30 ? <TextArea _key={_key} value={value} /> : <Input _key={_key} value={value} />
  } else if (typeof value == 'boolean') {
    return <Checkbox _key={_key} value={value} />
  } else {
    return (
      <S.FormItemContainer>
        <S.Label>{startCase(_key)}:</S.Label>
        <S.Input defaultValue={value.toString() || ''} />
      </S.FormItemContainer>
    )
  }
}

export default DynamicInput
