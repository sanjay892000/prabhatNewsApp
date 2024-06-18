import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';
import Loading from './Loading';

const News = (props) => {
   const apiKey = "4fc4c0d318f04f198219c24e49e20354"
   const capializeFirstLtr = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }
   document.title = `${capializeFirstLtr(props.category)}-NewsMonkey App`;

   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);


   const updateComponent = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults)
      setLoading(false);
   }

   useEffect(() => {
      updateComponent();
      // esline-disable-next-line
   },)

   const ClickNextBtn = async () => {

      setPage(page + 1);
      updateComponent();
   }
   const ClickPreviousBtn = async () => {

      setPage(page - 1);
      updateComponent();
   }



   return (
      <>
         <div className="container my-3">
            <h3 className='' style={{ textAlign: 'center', padding: '13px' }}>Monkey News- Top {capializeFirstLtr(props.category)} Headlines</h3>
            {loading && <Loading />}
            <div className="row">
               {articles.map((element) => {
                  return <div className="col-md-4 my-2" key={element.url}>
                     <NewsItems tittle={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 80) : "Welcome to the live updates platform PrabhatNews. Follow all the major updates"} urlToImage={element.urlToImage} Newsurl={element.url} date={element.publishedAt} author={element.author} badge={element.source.name} />
                  </div>
               })}
            </div><br />
            <div className="container d-flex justify-content-between">
               <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={ClickPreviousBtn}>&larr; Previous</button>
               <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={ClickNextBtn}>Next &rarr;</button>
            </div>
         </div>
      </>
   )

}
News.defaultProps = {
   country: 'in',
   pageSize: 15,
   category: 'general',
   apiKey: `4aae5b07b9214adaa39cb03225ba04d1`
}

News.propTypes = {
   country: PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string,
   apiKey: PropTypes.string,
}

export default News
