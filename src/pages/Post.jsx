import React from 'react'
import styled from 'styled-components'

const Post = () => {
  return (
    <React.Fragment>
    <PostHead>
      <TitleTyphography>Title</TitleTyphography>  
      <AuthorTyphography>Author</AuthorTyphography>
    </PostHead>
    <h4>Content</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem, in enim et totam dicta animi quo officiis. Assumenda veritatis expedita culpa laudantium iusto dolores nam eius vero corporis dignissimos.</p>
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