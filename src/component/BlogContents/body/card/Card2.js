import React, { useState, useEffect } from 'react';
import "./card.css";
import gif1 from "./asset/Anima.gif"

function Card2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = () => {
    const pageSize = 10;

    fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-01-30&to=2024-01-30&sortBy=popularity&apiKey=a51462388d244472843a2005c9253ed0&pageSize=${pageSize}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  useEffect(() => {
    getData()
  }, []);
  

  if (loading) {
    return <img src={gif1} alt="Your GIF" />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
  <div>
  {data && (    
    <div className="card-container">
      {data.articles.map((article, index) => (
        <div className="card-trans">
            <a href={article.url} className="card-a1">
            <div className="card-img">
              <img src={article.urlToImage} className="img01" />
            </div>
            <div className="card-article-wrapper">
              <div className="article-categories">Apple</div>
              <h4 className="article-title">
                {article.title}
              </h4>
              <div className="article-discription">{article.description}</div>
              <div className="article-footer">
                <div className="article-author">{article.author}</div>
                <div className="article-date"><time>{article.publishedAt}</time></div>
              </div>
              <button className="btn">&#8640;</button>
            </div>
          </a>
          </div>
          ))}
    </div>
  )}
    </div>
);
}

export default Card2;
