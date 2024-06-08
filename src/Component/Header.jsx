import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {

  const navigate = useNavigate()
  return (
    <HeaderBox>
      <Logo onClick={()=>{navigate('/')}}>Like Lion Community</Logo>
      <NavButtonBox>
      <NavButtom onClick={()=>{navigate('/login')}}>Login</NavButtom>
      <NavButtom onClick={()=>{navigate('/signup')}}>Signup</NavButtom>
      <NavButtom onClick={()=>{navigate('/posts')}}>Posts</NavButtom>
      </NavButtonBox>
      </HeaderBox>
  )
}

const HeaderBox=styled('div')`
  background-color: #cccccc;
  border-radius: 10px;
  padding:10px;

`
const Logo=styled('div')`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`

const NavButtonBox=styled('div')`
  display: flex;
`

const NavButtom=styled('button')`
  width: 100%;
  background-color: transparent;
  border: none;
  &:hover{
    background-color: #aaaaaa;
    border-radius: 5px;

  }

`
export default Header
