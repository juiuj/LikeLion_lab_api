import React, { useState } from 'react'
import ShadowBox from '../Component/ShadowBox'
import styled from 'styled-components';
import MyInput from '../Component/MyInput';
import MyButton from '../Component/MyButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate=useNavigate()
  const[username, setUsername]=useState('')
  const[nickName, setNickname]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const data={
      username,
      password,
      email,
      nickName
    }
    try{
      const res= await axios.post(process.env.REACT_APP_SERVER_URL + '/api/v1/auth/signup', data)
      console.log('Signup Api res: ',res)
      alert('회원가입 성공')
      navigate('/')
    } catch (error){ 
      console.error(error);
      alert('회원가입 실패')
    }

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
        value={nickName}
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