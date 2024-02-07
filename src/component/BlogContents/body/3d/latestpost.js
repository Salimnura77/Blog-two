import "./latestpost.css";
import { useEffect, useState } from "react";

const Latestpost = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = () => {
    const pageSize = 5; // Change the number of articles as needed

    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a51462388d244472843a2005c9253ed0&pageSize=${pageSize}`)
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

  const getArticleDetails = (url) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(articleDetails => {
        console.log('Article details:', articleDetails);
        // Handle the article details as needed
      })
      .catch(error => {
        console.error('Error fetching article details:', error);
        // Handle the error
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <p>..</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="latest-post">
        <div className="latest-post-container">
            <div className="latest-post-content">
              <h6 className="latest-post-title">LATEST POST</h6>
              <hr className="hr1" />
              {data && (
              <ul>
                 {data.articles.map((article, index) => (
                <li>
                  <a href={article.url} onClick={() => getArticleDetails(article.url)}>
                    {article.title}
                  </a>
                </li>
                   ))}
                </ul>
                )}
            </div>
        </div>
    </div>
  );
};

export default Latestpost;
