import ButtonSubmit from "../atoms/ButtonSubmit.jsx";

export default function Form({ children, textButton, onSubmit, dataTestButton }) {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <ButtonSubmit dataTestButton={dataTestButton}>{textButton}</ButtonSubmit>
        </form>
    );
}