import Nav from "../../components/nav/Nav";
import articleArray from "../../assets/data/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const [articles, setArticle] = useState(articleArray)
    return (
        <>
            <Nav/>
            {articles.map((article, index) => {
                return (
                    <div key={index}>
                        <img src={article.img_url} alt="" />
                        <h2>{article.title}</h2>
                        <Link to={`/blog/${article.id}`}>Read more</Link>
                    </div>
                )
            })}
        </>
    );
}

export default Blog;