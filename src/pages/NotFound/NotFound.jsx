import { Link } from "react-router-dom";

const NotFound = () => (

    <main className="">
        <h1 className="">404</h1>
        <p className="">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="" to ="/">Retourner sur la page d'acceuil</Link>
    </main>
)

export default NotFound