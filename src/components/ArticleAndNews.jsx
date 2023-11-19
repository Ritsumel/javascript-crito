import { Link } from 'react-router-dom'
import Articles from '../components/generics/Articles'

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