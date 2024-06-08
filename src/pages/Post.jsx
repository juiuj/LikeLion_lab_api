import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useCookies } from 'react-cookie'

const Post = () => {

  const {postId} = useParams()
  const [post, setPost]=useState(null)
  const[cookies,setCookie, deleteCookie]=useCookies()

  useEffect(()=>{
    ;(async() => {
      try{
        const res=await axios.get(process.env.REACT_APP_SERVER_URL+`/api/v1/post/${postId}`,{
          headers:{
            Authorization:'Bearer'+cookies.accessToken
          }
        })
        console.log(res)
        setPost(res.data)
      }catch(error){
        console.error(error);
        alert('포스트 조회 실패')
      }
    })
  },[])


  return (
    <React.Fragment>
    {post ? <React.Fragment>
      <PostHead>
      <TitleTyphography>{post.title}</TitleTyphography>  
      <AuthorTyphography>{post.user.username}r</AuthorTyphography>
    </PostHead>
    <h4>Content</h4>
    <p>{post.content}</p>
    </React.Fragment> 
    :
    <h1>Loaing...</h1>}
    </React.Fragment> 
  )
}

const PostHead=styled('div')`
    display: flex;
    align-items: baseline;
    margin-top: 100px;

`

const TitleTyphography=styled('div')`
    font-size: 24px;
    font-weight:700;
    margin-right: 15px;
`
const AuthorTyphography=styled('div')`
    font-size: 18px;
    color: #777777;
`

export default Post