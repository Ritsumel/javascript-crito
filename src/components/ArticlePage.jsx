import NextPageScroller from './generics/NextPageScroller'
import Articles from './generics/Articles';

const ArticlePage = () => {

  return (
    <section className='article-page-section container'>
        <h2 id="h2-1">Our News & Articles</h2>
        <Articles />
        <NextPageScroller />
    </section>
  );
};

export default ArticlePage