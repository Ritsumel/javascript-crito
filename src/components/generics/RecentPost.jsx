import React from 'react'

const RecentPost = ({ title, date }) => {
  return (
    <div className='post'>
        <p id='title'>{title}</p>
        <p id='date'>{date}</p>
    </div>
  )
}

export default RecentPost