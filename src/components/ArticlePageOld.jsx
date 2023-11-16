import React from 'react'
import ArticleBox from './generics/ArticleBox'
import img_25_mars from '@images/25-mars.jpg'
import img_17_mars from '@images/17-mars.jpg'
import img_13_mars from '@images/13-mars.jpg'
import img_12_mars from '@images/12-mars.jpg'
import img_7_mars from '@images/7-mars.jpg'
import img_2_mars from '@images/2-mars.jpg'
import img_28_feb from '@images/28-feb.jpg'
import img_18_feb from '@images/18-feb.jpg'
import img_11_feb from '@images/11-feb.jpg'
import NextPageScroller from './generics/NextPageScroller'

const ArticlePageOld = () => {
  return (
    <section className='article-page-section'>
        <div className='articles-page container'>
            <h2>Our News & Articles</h2>
            <div className='articles'>
                {/* <div className='line1'> */}
                    <ArticleBox link="/NewsDetails" image={img_25_mars} date="25" month="Mar" title="How To Use Digitalization In The Classroom" alt="woman with brown hair smiling sitting at a desk with a cup on it" />
                    <ArticleBox link="/Article17mars" image={img_17_mars} date="17" month="Mar" title="How To Implement Chat GPT In Your Projects" alt="chat gpt functions" />
                    <ArticleBox link="/Article13mars" image={img_13_mars} date="13" month="Mar" title="The Guide To Support Modern CSS Design" alt="css design guide books" />
                {/* </div>
                <div className='line2'> */}
                    <ArticleBox link="/Article12mars" image={img_12_mars} date="12" month="Mar" title="Why You Need To Implement The Five S's" alt="people in an audience writing down in blocks" />
                    <ArticleBox link="/Article7mars" image={img_7_mars} date="7" month="Mar" title="Get More Involved With Your End Users" alt="office with windows and lamps hanging down" />
                    <ArticleBox link="/Article2mars" image={img_2_mars} date="2" month="Mar" title="Guided Tour Of Our New Head Office In Stockholm" alt="office with computers and lamps and empty chairs" />
                {/* </div>
                <div className='line3'> */}
                    <ArticleBox link="/Article28feb" image={img_28_feb} date="28" month="Feb" title="Using Business Intelligence To Get Insights Into Our Businesses" alt="a laptop on a table showing statistics" />
                    <ArticleBox link="/Article18feb" image={img_18_feb} date="18" month="Feb" title="Apple Has Released New Products. Are They Any Good?" alt="a tablet, a pen, a smart watch and a glasses laying next to each other" />
                    <ArticleBox link="/Article11feb" image={img_11_feb} date="11" month="Feb" title="How To Improve Your Teams And Get A Better Result" alt="a cup, a laptop, a ruler and a block with a pen on a table" />
                {/* </div> */}
            </div>
            <NextPageScroller />
        </div>
    </section>
  )
}

export default ArticlePageOld