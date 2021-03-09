import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a9148e21f57240e086213021a2624234';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles));
    }, [])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News news = {article} key = {article.title}></News>)
            }
        </div>
    );
};

export default TopHeadline;