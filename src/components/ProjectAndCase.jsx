import React from 'react'
import { Link } from 'react-router-dom'
import img_article_image_1 from '@images/article-image-1.png'
import img_article_image_2 from '@images/article-image-2.png'
import img_article_image_3 from '@images/article-image-3.png'
import img_article_image_4 from '@images/article-image-4.png'
import Project from './generics/Project'

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <Project link={"/Newsarticle1"} image={img_article_image_1} alt={"a man's hands reading a business paper"} title={"Grow your business"} />
                <Project link={"/Newsarticle2"} image={img_article_image_2} alt={"pink apple products"} title={"Why your client needs a responsive website"} />
                <Project link={"/Newsarticle3"} image={img_article_image_3} alt={"desk with office supplies and a laptop"} title={"Educate your employees to get better results"} />
                <Project link={"/Newsarticle4"} image={img_article_image_4} alt={"laptop with business intelligence insights"} title={"Business Insights is a important piece of your business"} />
            </div>
            <div className="recent-projects-button">
                <Link to="/Projects" className="btn-yellow btn-black">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default ProjectAndCase