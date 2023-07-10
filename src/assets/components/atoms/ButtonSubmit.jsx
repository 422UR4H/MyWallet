export default function ButtonSubmit({ children, dataTestButton }) {
    return <button type="submit" data-test={dataTestButton}>{children}</button>;
}