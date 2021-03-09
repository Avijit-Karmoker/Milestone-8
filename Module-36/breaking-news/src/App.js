import "./App.css";
import News from "./components/News/News";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   const url =
  //     "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a9148e21f57240e086213021a2624234";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data.articles));
  // }, []);
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a9148e21f57240e086213021a2624234";
    axios(url)
    .then((data) => setArticles(data.data.articles));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Total Headline: {articles.length}</h1>
      {articles.map(article => (
        <News article={article} key={article.title}></News>
      ))}
    </div>
  );
}

export default App;
