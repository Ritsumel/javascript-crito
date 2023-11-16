import React from 'react'

import SearchBar from './SearchBar'

const ArticleSide = () => {

  return (
    <div className='article-side container'>
        <SearchBar />
        <div className='recent-posts'>
            <h3>Recent Posts</h3>
            <div className='post1'>
                <p id='title'>How To Blow Through Capital At An Incredible Rate</p>
                <p id='date'>Jan 14, 2020</p>
            </div>
            <div className='post2'>
                <p id='title'>How To Blow Through Capital At An Incredible Rate</p>
                <p id='date'>Jan 14, 2020</p>
            </div>
            <div className='post3'>
                <p id='title'>How To Blow Through Capital At An Incredible Rate</p>
                <p id='date'>Jan 14, 2020</p>
            </div>
            <div className='post4'>
                <p id='title'>How To Blow Through Capital At An Incredible Rate</p>
                <p id='date'>Jan 14, 2020</p>
            </div>
        </div>
        <div className='categories'>

        </div>
    </div>
  )
}

export default ArticleSide