import ButtonSubmit from "../atoms/ButtonSubmit.jsx";

export default function Form({ children, textButton, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <ButtonSubmit>{textButton}</ButtonSubmit>
        </form>
    );
}