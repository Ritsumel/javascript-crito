import React from 'react'
import { Link } from 'react-router-dom'
import img_25_mars from '@images/25-mars.jpg'
import img_17_mars from '@images/17-mars.jpg'
import img_13_mars from '@images/13-mars.jpg'

const ArticleAndNews = ({ backgroundColor }) => {
  return (
    <section className="article-and-news" style={{ backgroundColor }}>
        <div className="container">
            <div className="box1">
                <div className="texts">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2> 
                </div>
                <div className="browse-articles-button">
                    <Link to="/News" className="btn-yellow btn-transparent">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="box2">
                <Link to="/NewsDetails" className="images-link">
                    <div className="images">
                        <div className="images-box"><img src={img_25_mars} alt="woman with brown hair smiling sitting at a desk with a cup on itr" />
                            <div className="yellow-box"><p id="p3">25</p><p id="p4">Mar</p></div>
                        </div>
                    </div>
                    <p id="p1">Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p id="p2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </Link>
                <Link to="/Article17mars" className="images-link">
                    <div className="images">
                        <div className="images-box"><img src={img_17_mars} alt="chat gpt functions" />
                            <div className="yellow-box"><p id="p3">17</p><p id="p4">Mar</p></div>
                        </div>
                    </div>
                    <p id="p1">Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p id="p2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </Link>
                <Link to="/Article13mars" className="images-link">
                    <div className="images">
                        <div className="images-box"><img src={img_13_mars} alt="css design guide books" />
                            <div className="yellow-box"><p id="p3">13</p><p id="p4">Mar</p></div>
                        </div>
                    </div>
                    <p id="p1">Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p id="p2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </Link>
            </div>
            <div className="dots">
            <nav>
                <a className="active" href="articles-roll-1.html"></a>
                <a href="articles-roll-2.html"></a>
                <a href="articles-roll-3.html"></a>
                <a href="articles-roll-4.html"></a>
                <a href="articles-roll-5.html"></a>
            </nav>
            </div>
        </div>
    </section>
  )
}

export default ArticleAndNews