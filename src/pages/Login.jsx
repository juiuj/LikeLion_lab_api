import React, { useState } from 'react'
import ShadowBox from '../Component/ShadowBox'
import styled from 'styled-components';
import MyInput from '../Component/MyInput';
import MyButton from '../Component/MyButton';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate=useNavigate()
  const[username, setUsername]=useState('')
  const[password, setPassword]=useState('')
  const[cookies,setCookie, deleteCookie]=useCookies()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const data={
      username,
      password
    }
    try{
      const res=await axios.post(process.env.REACT_APP_SERVER_URL + '/api/v1/auth/signin', data)
      setCookie('accessToken', res.data.accessToken)
      setCookie('refreshToken', res.data.refreshToken)
      alert('로그인 성공')
      navigate('/')
    }
    catch(error){
      console.error(error)
      alert('로그인 실패')
    }

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