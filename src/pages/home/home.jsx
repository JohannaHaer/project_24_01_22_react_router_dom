
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import "./home.css";

const Home = () => {
    return (
        <>
        <header>
            <Nav/>
        </header>
        <main>
            <h1>Welcome to my simple Blog</h1>
            <Link to='/blog'>Go to Article</Link>
        </main>
        </>
    );
}
 
export default Home;