import React from 'react'
import { Link } from 'react-router-dom'
import img_article_image_1 from '@images/article-image-1.png'
import img_article_image_2 from '@images/article-image-2.png'
import img_article_image_3 from '@images/article-image-3.png'
import img_article_image_4 from '@images/article-image-4.png'

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <Link to="/Newsarticle1" className="project">
                    <img src={img_article_image_1} alt="a man's hands reading a business paper" />
                    <h3>Grow your business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
                <Link to="/Newsarticle2" className="project">
                    <img src={img_article_image_2} alt="pink apple products" />
                    <h3>Why your client needs a responsive website</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
                <Link to="/Newsarticle3" className="project">
                    <img src={img_article_image_3} alt="desk with office supplies and a laptop" />
                    <h3>Educate your employees to get better results</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
                <Link to="/Newsarticle4" className="project">
                    <img src={img_article_image_4} alt="laptop with business intelligence insights" />
                    <h3>Business Insights is a important piece of your business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </Link>
            </div>
            <div className="recent-projects-button">
                <Link to="/Projects" className="btn-yellow btn-black">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default ProjectAndCase