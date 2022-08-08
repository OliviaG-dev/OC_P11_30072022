import { Link } from "react-router-dom";
import "./NoFound.css"

const NotFound = () => (

    <main className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to ="/">Retourner sur la page d'acceuil</Link>
    </main>
)

export default NotFound