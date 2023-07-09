import { Link } from "react-router-dom";
import Logo from "../atoms/Logo.jsx";
import Form from "../molecules/Form.jsx";

export default function SignTemplate({ children, textButton, textLink, routeLink, onSubmit }) {
    return (
        <>
            <Logo />
            <Form textButton={textButton} onSubmit={onSubmit}>{children}</Form>
            <Link to={routeLink}>{textLink}</Link>
        </>
    )
}