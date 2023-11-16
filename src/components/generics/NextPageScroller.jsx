import React from 'react'
import { Link } from 'react-router-dom'

const NextPageScroller = () => {
  return (
    <div className="next-page-scroller">
        <Link className="square" to="/News/page"><i className="fa-solid fa-angle-left"></i></Link>
        <Link className="active square" to="/News/page1">1</Link>
        <Link className="square" to="/News/page2">2</Link>
        <Link className="square" to="/News/page3">3</Link>
        <Link className="square" to="/News/page">...</Link>
        <Link className="square" to="/News/page9">9</Link>
        <Link className="square" to="/News/page"><i className="fa-solid fa-angle-right"></i></Link>
    </div>
  )
}

export default NextPageScroller