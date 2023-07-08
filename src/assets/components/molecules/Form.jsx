import Button from "../atoms/Button.jsx";

export default function Form({ children, textButton }) {
    return (
        <form>
            {children}
            <Button type="submit">{textButton}</Button>
        </form>
    );
}