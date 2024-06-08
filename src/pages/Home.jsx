import styled from 'styled-components'
import MyButton from '../Component/MyButton'
import React, { useEffect, useState } from 'react'
import { cookies, useCookies } from 'react-cookie'
import axios from 'axios'

const Home = () => {

  const [username, setUsername]=useState('')
  const[ cookies,setCookie, deleteCookie]=useCookies()


  useEffect(()=>{
    const fetch=async()=>{
      if(cookies.accessToken){
      try{
        const res=await axios.get(process.env.REACT_APP_SERVER_URL + '/api/v1/auth/verify',{
          headers: {
            Authorization: 'Bearer'+cookies.accessToken
          }
        })
        console.log(res)
        setUsername(res.data)
      }catch(error){
        alert('Verify 실패')
        console.error(error);
      }
    }
  }
    fetch()
  },[])


const handleLogout=()=>{
  deleteCookie('accessToken')
  setUsername('')
  alert('로그아웃!!!')
}

  return (
    <HomeBox>
    {username ? 
    <div>
      <h1>{username}님 반갑습니다!</h1>
      <LogoutWrap>
        <MyButton onClick={handleLogout}>로그아웃</MyButton>
      </LogoutWrap>
    </div>
    :
    <h1>지금당장 로그인!!</h1>}
    </HomeBox>
  )
}

const HomeBox=styled('div')`
  margin-top: 150px;
  text-align: center;
`

const LogoutWrap=styled('div')`
  width:300px;
  margin: auto;
`

export default Home