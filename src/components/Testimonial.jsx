import React from 'react'
import { Link } from 'react-router-dom'
import img_cassandra_warren from '@images/cassandra-warren.png'
import img_amanda_tulling from '@images/amanda-tulling.png'
import img_jack_mcdogglas from '@images/jack-mcdogglas.png'

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
                <div className="review-1">
                    <div className="review-stars"><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                    <p id="p2">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="cassandra-warren">
                        <img src={img_cassandra_warren} />
                        <h3>Cassandra Warren</h3>
                        <p id="p3">Business Manager, Dorfus</p>
                    </div>
                </div>
                <div className="review-2">
                    <div className="review-stars"><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                    <p id="p2">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="amanda-tulling">
                        <img src={img_amanda_tulling} />
                        <h3>Amanda Tulling</h3>
                        <p id="p3">Senior Developer, Square</p>
                    </div>
                </div>
                <div className="review-3">
                    <div className="review-stars"><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i></div>
                    <p id="p2">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="jack-mcdogglas">
                        <img src={img_jack_mcdogglas} />
                        <h3>Jack McDogglas</h3>
                        <p id="p3">Key Account Manager, Gobona</p>
                    </div>
                </div>
            </div>
            <div className="reviews-button">
                <Link to="/Reviews" className="btn-yellow btn-black">All Reviews <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default Testimonial