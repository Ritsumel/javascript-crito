import { Link } from 'react-router-dom'
import Articles from '../components/generics/Articles'
import Dots from './generics/dots'

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
                <Articles maxArticles={3} />
            </div>
            <div className="dots">
                <Dots />
            </div>
        </div>
    </section>
  )
}

export default ArticleAndNews