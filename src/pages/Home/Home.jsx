import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <h1>Page Home</h1>
            <Link to={`about`}>About</Link>
        </>
    )
}