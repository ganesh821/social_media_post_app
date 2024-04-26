import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const PostLayout = () => {
  return (
    <div>
      <>
      <Link to ="/postpage/1">post 1</Link><br/>
      <Link to ="/postpage/2">post 2</Link><br/>
      <Link to ="/postpage/3">post 3</Link><br/>
     <Link to ="/newpost">NewPost</Link>
     <Outlet />
      </>
    </div>
  )
}

export default PostLayout
