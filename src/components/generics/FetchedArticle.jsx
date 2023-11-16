import React from 'react'

const FetchedArticle = ({ title, content, imageUrl, published, category }) => {
    const date = new Date(published);
    const dateDay = date.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateMonth = months [date.getMonth()];

  return (
    <div className='fetched-article container'>
        <div className='images'>
            <div className='images-box'>
                <div className="yellow-box"><p id="p3">{dateDay}</p><p id="p4">{dateMonth}</p></div>
                <img src={imageUrl} alt={title} />
            </div>
        </div>
        <p id="p1">{category}</p>
        <h2>{title}</h2>
        <p id="p2">{content}</p>
    </div>
  )
}

export default FetchedArticle