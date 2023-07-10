import { Link } from "react-router-dom";
import Logo from "../atoms/Logo.jsx";
import Form from "../molecules/Form.jsx";

export default function SignTemplate({ children, textButton, textLink, routeLink, onSubmit, dataTestButton }) {
    return (
        <>
            <Logo />
            <Form textButton={textButton} onSubmit={onSubmit} dataTestButton={dataTestButton}>{children}</Form>
            <Link to={routeLink}>{textLink}</Link>
        </>
    )
}