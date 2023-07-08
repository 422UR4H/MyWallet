import { Link } from "react-router-dom";
import Logo from "../atoms/Logo.jsx";
import Form from "../molecules/Form.jsx";

export default function SignTemplate({ children, textButton, textLink }) {
    return (
        <>
            <Logo />
            <Form textButton={textButton}>{children}</Form>
            <Link to="/cadastro">{textLink}</Link>
        </>
    )
}