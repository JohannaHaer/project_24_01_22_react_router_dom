import Nav from "../../components/nav/Nav";
import articleArray from "../../assets/data/data";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <>
            <Nav/>
            {articleArray.map((article, index) => {
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