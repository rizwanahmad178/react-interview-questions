import React from 'react'

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <nav aria-label="Page navigation example">
        <ul className='pagination'>
        {pageNumbers.map((number)=>{
            return <li key={number} className='page-item' onClick={()=>paginate(number)}>
                <a class="page-link">{number}</a>
            </li>
        })}
    </ul>
    </nav>
    
  )
}

export default Pagination
