import React from 'react'
import img_girls_talking from '@images/girls-talking.jpg'
import ChooseUsCard from './generics/ChooseUsCard'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="box1">
                <p id="p1">Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <div className="small-boxes">
                    <ChooseUsCard className={"process-excellence"} classNameIcon={"fa-regular fa-thumbs-up"} title={"Process Excellence"} text={"Lorem, ipsum dolor sit amet consectetur."} />
                    <ChooseUsCard className={"strategic-planning"} classNameIcon={"fa-regular fa-shapes"} title={"Strategic Planning"} text={"Lorem, ipsum dolor sit amet consectetur."} />
                    <ChooseUsCard className={"experience-design"} classNameIcon={"fa-regular fa-pen-nib"} title={"Experience Design"} text={"Lorem, ipsum dolor sit amet consectetur."} />
                    <ChooseUsCard className={"artificial-intelligence"} classNameIcon={"fa-regular fa-head-side-gear"} title={"Artificial Intelligence"} text={"Lorem, ipsum dolor sit amet consectetur."} />
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