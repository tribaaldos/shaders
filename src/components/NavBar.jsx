import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <button className="btn"><Link to ="/new">New shader </Link></button>
        </nav>
    )
}