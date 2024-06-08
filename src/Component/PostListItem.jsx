import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PostListItem = ((post) => {

  const navigate=useNavigate()

  return (
    <ItemBox onClick={()=>{navigate(`/post/${post.id}`)}}>
        <TitleTyphography>{post.title}</TitleTyphography>
        <AuthorTyphography>{post.user.username}</AuthorTyphography>
    </ItemBox>
  )
})

const ItemBox=styled('div')`
    padding: 5px 15px;
    border-radius: 5px;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 15px;
    &:hover{
      background-color: #dddddd;
    }
`

const TitleTyphography=styled('div')`
    font-size: 18px;
    font-weight:700;
`
const AuthorTyphography=styled('div')`
    font-size: 12px;
    color: #777777;
`


export default PostListItem