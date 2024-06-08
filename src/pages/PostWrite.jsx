import React, { useState } from 'react'
import ShadowBox from '../Component/ShadowBox'
import MyInput from '../Component/MyInput'
import MyButton from '../Component/MyButton'
import styled from 'styled-components'
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const PostWrite = () => {

    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const[ cookies,setCookie, deleteCookie]=useCookies()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
          title,
          content
        }
        try{
          const res=await axios.post(process.env.REACT_APP_SERVER_URL +'/api/v1/post', data, {
            Authorization:'Bearer' + Cookies.accessToken
          })
          console.log(res)
          alert('작성완료')
          navigate('/')
        } catch(error){
          console.log(error)
          alert('작성실패')
        }
    }

  return (
    <ShadowBoxWrap>
    <ShadowBox>
    <form onSubmit={handleSubmit}>        
        <MyInput type='text' placeholder='제목을 입력하세요'
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
        ></MyInput>
        <textarea rows={10} style={{width:'100%', 
        boxSizing:'border-box',
        borderRadius:'5px',
        marginBottom:'10px'
        }}
        value={content} onChange={(e)=>{setContent(e.target.value)}}
        ></textarea>
        <MyButton type='submit'>Submit</MyButton>
    </form>

    </ShadowBox>
    </ShadowBoxWrap>
  )
}

const ShadowBoxWrap=styled('div')`
  padding: 100px 0;
`

export default PostWrite