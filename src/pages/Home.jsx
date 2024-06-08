import React, { useState } from 'react'
import styled from 'styled-components'
import MyButton from '../Component/MyButton'

const Home = () => {

  const IsLogged= true
  const username='홍길동'

  return (
    <HomeBox>
    {IsLogged ? 
    <div>
      <h1>{username}님 반갑습니다!</h1>
      <LogoutWrap>
        <MyButton>로그아웃</MyButton>
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