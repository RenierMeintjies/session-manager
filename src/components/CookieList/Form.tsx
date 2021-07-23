import React from 'react'

const Form = ({ cookie }: any) => {
  return (
    <>
      {Object.keys(cookie).map((key) => {
        let val = cookie[key]

        return (
          <span style={{ display: 'flex' }}>
            <h4>{key}:</h4>
            <input defaultValue={val} />
          </span>
        )
      })}
    </>
  )
}

export default Form
