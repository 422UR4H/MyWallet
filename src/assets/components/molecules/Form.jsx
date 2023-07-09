import ButtonSubmit from "../atoms/ButtonSubmit.jsx";

export default function Form({ children, textButton, routeButton, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <ButtonSubmit routeButton={routeButton}>{textButton}</ButtonSubmit>
        </form>
    );
}