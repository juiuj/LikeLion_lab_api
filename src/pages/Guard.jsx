import React, {children} from 'react'
import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'


const Guard = ((children)) => {

    const[cookies,setCookie, deleteCookie]=useCookies()

  return (
    <React.Fragment>
    {cookies.accessToken ? children : <Navigate to={'/'}>{alert('로그인 후 이용해주세요')}</Navigate>}
    </React.Fragment>
  )
}

export default Guard;