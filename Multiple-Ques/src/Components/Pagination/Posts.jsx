import React from 'react'

function Posts({posts, loading}) {
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <ul className='list-group'>
        {posts.map((post)=>{
            return <li key={post.id} className='list-group-item'>
                {post.title}
            </li>
        })}
    </ul>
  )
}

export default Posts
