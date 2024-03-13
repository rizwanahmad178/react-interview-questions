import React, { useEffect, useState } from 'react'
import './Pagination.css'
import Posts from './Posts'
import Pagination from './Pagination'

function PaginationApp() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const postsPerPage = 10;
    
    useEffect(()=>{
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await res.json();
            setPosts(result);
            // console.log(result);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    // get current post
    const indexOLP = currPage * postsPerPage;
    const indexOFP = indexOLP - postsPerPage;
    const currPosts = posts.slice(indexOFP,indexOLP);

    // change page
    const paginate = pageNumber => setCurrPage(pageNumber);
  return (
    <div className='pageApp'>
      <h1 className='mb-4 text-4xl font-extrabold'>Pagination</h1>
      <Posts posts={currPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default PaginationApp
