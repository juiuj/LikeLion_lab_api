import React, { useState } from 'react'
import ShadowBox from '../Component/ShadowBox'
import styled from 'styled-components';
import MyInput from '../Component/MyInput';
import MyButton from '../Component/MyButton';

const Login = () => {

  const[username, setUsername]=useState('')
  const[password, setPassword]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log('username: ', username)
    console.log('password: ', password)

  }

  return (
    <ShadowBoxWrap>
    <ShadowBox>
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <MyInput 
        type='text' 
        placeholder='유저네임을 입력하세요'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        ></MyInput>
      <MyInput type='password'
       placeholder='비밀번호를 입력하세요'
       value={password}
       onChange={(e)=>{setPassword(e.target.value)}}
       ></MyInput>
      <MyButton type='submit'>Login</MyButton>
      </form>
    </ShadowBox>
    </ShadowBoxWrap>
  )
}

const ShadowBoxWrap=styled('div')`
  padding: 100px 150px;
`
export default Login