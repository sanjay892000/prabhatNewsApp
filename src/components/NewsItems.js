import React from 'react'

const NewsItems =(props)=>{
    let { tittle, description, urlToImage, Newsurl,badge } =props;
    return (
      <>
      <div className="card">
        <img src={!urlToImage ? "https://imageio.forbes.com/specials-images/imageserve/64d7a4b21c0f8b38e4b1ea3f/0x0.jpg?format=jpg&crop=5189,2917,x0,y0,safe&width=1200" : urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          {/* Useing Badge */}
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'89%', zIndex:1}}> {badge}</span>
         {/*  Adding card tittle */}
          <h5 className="card-title">{tittle}.....</h5>
          <p className="card-text">{description}.....</p>
          <a href={Newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </>
    )
}

export default NewsItems
