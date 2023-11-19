import React from 'react'
import { Link } from 'react-router-dom'
import img_cassandra_warren from '@images/cassandra-warren.png'
import img_amanda_tulling from '@images/amanda-tulling.png'
import img_jack_mcdogglas from '@images/jack-mcdogglas.png'
import Review from './generics/Review'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <div className="white-box"></div>
            <div className="box1">
                <p id="p1">Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="box2">
                <Review className1={"review-1"} className2={"cassandra-warren"} comment={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"} image={img_cassandra_warren} name={"Cassandra Warren"} position={"Business Manager, Dorfus"} />
                <Review className1={"review-2"} className2={"amanda-tulling"} comment={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"} image={img_amanda_tulling} name={"Amanda Tulling"} position={"Senior Developer, Square"} />
                <Review className1={"review-3"} className2={"jack-mcdogglas"} comment={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"} image={img_jack_mcdogglas} name={"Jack McDogglas"} position={"Key Account Manager, Gobona"} />
            </div>
            <div className="reviews-button">
                <Link to="/Reviews" className="btn-yellow btn-black">All Reviews <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default Testimonial