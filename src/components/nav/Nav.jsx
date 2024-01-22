import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
        </>
    );
}

export default Nav;