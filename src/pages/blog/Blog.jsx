import Nav from "../../components/nav/Nav";
import articleArray from "../../assets/data/data";
import { Link } from "react-router-dom";
import "./blog.css"

const Blog = () => {
    return (
        <>
            <Nav/>
            <article>
                {articleArray.map((article, index) => {
                    return (
                        <div key={index} className="grid">
                            <img src={article.img_url} alt="" />
                            <h2>{article.title}</h2>
                            <Link to={`/blog/${article.id}`}>Read more</Link>
                        </div>
                    )
                })}
            </article>
        </>
    );
}

export default Blog;