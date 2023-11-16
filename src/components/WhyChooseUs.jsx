import React from 'react'
import img_girls_talking from '@images/girls-talking.jpg'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="box1">
                <p id="p1">Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <div className="small-boxes">
                    <div className="process-excellence">
                        <i className="fa-regular fa-thumbs-up"></i>
                        <h3>Process Excellence</h3>
                        <p id="p2">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="strategic-planning">
                        <i className="fa-regular fa-shapes"></i>
                        <h3>Strategic Planning</h3>
                        <p id="p2">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="experience-design">
                        <i className="fa-regular fa-pen-nib"></i>
                        <h3>Experience Design</h3>
                        <p id="p2">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="artificial-intelligence">
                        <i className="fa-regular fa-head-side-gear"></i>
                        <h3>Artificial Intelligence</h3>
                        <p id="p2">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="box2">
                <div className="beige-box"></div>
                <img className="girls-talking" src={img_girls_talking} alt="two girls discussing in a meeting holding a book" />
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs