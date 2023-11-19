import React from 'react'

const Tag = ({tag}) => {
  return (
    <div className='tags'>
        <button className='btn-tag'>
            {tag}
        </button>
    </div>
  )
}

export default Tag