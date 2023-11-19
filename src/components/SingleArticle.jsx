import React from 'react'
import SearchBar from './generics/SearchBar'
import Tag from './generics/tag'


const SingleArticle = ({ title, content, imageUrl, published, category, author }) => {
    const date = new Date(published);
    const dateDay = date.getDate();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateMonth = month [date.getMonth()];
    const dateYear = date.getFullYear();

  return (
    <section className='single-article container'>
            <div className='article-left-side'>
                <h2>{title}</h2>
                <span id="span-1">{dateMonth} {dateDay}, {dateYear}<i class="fa-solid fa-circle"></i> </span>
                <span id="span-1">{category} <i class="fa-solid fa-circle"></i> </span>
                <span id="span-1">{author}</span>
                <img src={imageUrl} alt={title} />
                <p id="p-1">{content}</p>
                <div className='quote'>
                    <i class="fa-sharp fa-solid fa-quote-left fa-flip-vertical"></i>
                    <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</h3>
                </div>
                <p id="p-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <div className='tags'>
                    <Tag tag="Digitalization"/><Tag tag="School" /><Tag tag="IT" /><Tag tag="Design" /><Tag tag="Work" /><Tag tag="Tech" />
                </div>
            </div>
            <div className='article-right-side'>
                <div className='searchbar'><SearchBar /></div>
                <div className='upper-box'>
                    <div className='recent-posts'>
                        <h3>Recent Posts</h3>
                        <div className='title-border'></div>
                        <div className='post'>
                            <p id='title'>How To Blow Through Capital At An Incredible Rate</p>
                            <p id='date'>Jan 14, 2020</p>
                        </div>
                        <div className='line'></div>
                        <div className='post'>
                            <p id='title'>Design Studios That Everyone Should Know About?</p>
                            <p id='date'>Jan 14, 2020</p>
                        </div>
                        <div className='line'></div>
                        <div className='post'>
                            <p id='title'>How did we get 1M+ visitors in 30 days without anything!</p>
                            <p id='date'>Jan 14, 2020</p>
                        </div>
                        <div className='line'></div>
                        <div className='post'>
                            <p id='title'>Figma On Figma: How We Built Our Website Design System</p>
                            <p id='date'>Jan 14, 2020</p>
                        </div>
                    </div>
                </div>
                <div className='lower-box'>
                    <div className='categories'>
                            <h3>Categories</h3>
                            <div className='title-border'></div>
                            <div className='category-box'>
                                <p><span id="span-1">Technology - </span><span id="span-2">20 Posts</span></p>
                                <p><span id="span-1">Freelancing - </span><span id="span-2">07 Posts</span></p>
                                <p><span id="span-1">Writing - </span><span id="span-2">16 Posts</span></p>
                                <p><span id="span-1">Marketing - </span><span id="span-2">11 Posts</span></p>
                                <p><span id="span-1">Business - </span><span id="span-2">35 Posts</span></p>
                                <p><span id="span-1">Education - </span><span id="span-2">14 Posts</span></p>
                            </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default SingleArticle