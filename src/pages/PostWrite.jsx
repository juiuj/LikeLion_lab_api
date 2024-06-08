import React, { useState } from 'react'
import ShadowBox from '../Component/ShadowBox'
import MyInput from '../Component/MyInput'
import MyButton from '../Component/MyButton'
import styled from 'styled-components'

const PostWrite = () => {

    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("title: ", title)
        console.log("content: ", content)
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