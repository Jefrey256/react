import style from "./Footer.module.css"
import {Link} from 'react-router-dom'
const Footer = () =>{
    return(
        <footer className={style.footer_conf}>
            <h1>Criador JEREDY</h1>
            <button><Link to={"/react-page/home"}>opoppopop</Link></button>
        </footer>
    )
}

export default Footer;