
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";

const Home = () => {
    return (
        <>
        <Nav/>
        <h1>Welcome to my simple Blog</h1>
        <Link to='/blog'>Go to Article</Link>
        </>
    );
}
 
export default Home;