import React, { useState } from 'react'
import ShadowBox from '../Component/ShadowBox'
import styled from 'styled-components';
import MyInput from '../Component/MyInput';
import MyButton from '../Component/MyButton';

const Signup = () => {

  const[username, setUsername]=useState('')
  const[nickname, setNickname]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log('username: ', username)
    console.log('password: ', password)
    console.log('nickname: ', nickname)
    console.log('email: ', email)
    

  }

  return (
    <ShadowBoxWrap>
    <ShadowBox>
      <form onSubmit={handleSubmit}>
      <h1>SignIn</h1>
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
       <MyInput 
        type='text' 
        placeholder='닉네임을 입력하세요'
        value={nickname}
        onChange={(e)=>{setNickname(e.target.value)}}
        ></MyInput>
        <MyInput 
        type='text' 
        placeholder='이메일을 입력하세요'
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        ></MyInput>
      <MyButton type='submit'>SignIn</MyButton>
      </form>
    </ShadowBox>
    </ShadowBoxWrap>
  )
}

const ShadowBoxWrap=styled('div')`
  padding: 100px 150px;
`

export default Signup