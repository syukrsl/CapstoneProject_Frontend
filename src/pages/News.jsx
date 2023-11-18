import React, { useState, useEffect } from 'react';

function News() {
  const [singaporeNews, setSingaporeNews] = useState([]);
  const [asiaNews, setAsiaNews] = useState([]);
  // ... similar useState declarations for other categories

  useEffect(() => {
    // Define your API keys
    const newsApiKey = 'YOUR_NEWS_API_KEY';
    // ... other API keys if different

    // Singapore News API call
    const singaporeApiUrl = `https://newsapi.org/v2/top-headlines?country=sg&apiKey=${newsApiKey}`;
    // Asia News API call (modify as needed)
    const asiaApiUrl = `https://newsapi.org/v2/everything?q=asia&apiKey=${newsApiKey}`;
    // ... similar API URL declarations for other categories

    // Fetch Singapore News
    fetch(singaporeApiUrl)
      .then(response => response.json())
      .then(data => setSingaporeNews(data.articles))
      .catch(error => console.error(error));

    // Fetch Asia News
    fetch(asiaApiUrl)
      .then(response => response.json())
      .then(data => setAsiaNews(data.articles))
      .catch(error => console.error(error));

    // ... similar fetch calls for other categories
  }, []);

  return (
    <div>
      <h2>Singapore News</h2>
      <ul>
        {singaporeNews.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>

      <h2>Asia News</h2>
      <ul>
        {asiaNews.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Similar list rendering for other categories */}
    </div>
  );
}

export default News;
