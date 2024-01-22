import { Link, useParams } from "react-router-dom";
import articleArray from "../../assets/data/data";

const Article = () => {
    const idParam = useParams()

    const gesuchterArticle = articleArray.filter((article) => {
        return article.id === Number(idParam.id)
    })
    return (
        <>
            <div>
                <img src={gesuchterArticle[0].img_url} alt="" />
                <div>
                    <h2>{gesuchterArticle[0].title}</h2>
                    <p>{gesuchterArticle[0].published_date}</p>
                </div>
                <p>{gesuchterArticle[0].description}</p>
                <h4>By {gesuchterArticle[0].author}</h4>
            </div>
            <Link to='/blog'>Back to all Articles</Link>
        </>
    );
}

export default Article;