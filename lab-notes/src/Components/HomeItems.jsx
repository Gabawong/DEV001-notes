import { Link } from "react-router-dom";

const HomeItems = (props)=> {
    return (
        <li className="Home-button">
            <Link to = {props.link}>
                {props.text}
            </Link>
        </li>
        
    )
}





export default HomeItems