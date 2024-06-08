import React from 'react'
import styled from 'styled-components'
import MyButton from '../Component/MyButton'
import PostListItem from '../Component/PostListItem'
import { useNavigate } from 'react-router-dom'

const Posts = () => {

  const navigate=useNavigate()

  return (
    <React.Fragment>
      <PostsHead>
        <h1>Posts</h1>
        <WriteWrap>
        <MyButton onClick={()=>navigate('/post-write')}>Write</MyButton>
        </WriteWrap>
      </PostsHead>
      <PostListItem></PostListItem>
      <PostListItem></PostListItem>
      <PostListItem></PostListItem>
      <PostListItem></PostListItem>
      <PostListItem></PostListItem>
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