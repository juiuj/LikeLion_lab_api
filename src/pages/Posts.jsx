import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MyButton from '../Component/MyButton'
import PostListItem from '../Component/PostListItem'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Posts = () => {

  const navigate=useNavigate()
  const [postlist, setPostlist]=useState([])


useEffect(()=>{
  ;(async()=>{
    try{
      const res= await axios.get(process.env.REACT_APP_SERVER_URL + '/api/v1/post')
      console.log(res)
      setPostlist(res.data)
    }catch(error){
      console.error(error);
      alert('포스트 목록 받아오기 실패')
    }
  })()
})

  return (
    <React.Fragment>
      <PostsHead>
        <h1>Posts</h1>
        <WriteWrap>
        <MyButton onClick={()=>navigate('/post-write')}>Write</MyButton>
        </WriteWrap>
      </PostsHead>
      {postlist.map((post)=>{
        return <PostListItem onClick={()=>{console.log(post.id)}} key={post.id} post={post}></PostListItem>
      })}
    </React.Fragment>

  )
}

const PostsHead=styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const WriteWrap=styled('div')`
  width:300px;
  
`

export default Posts