export default function MainTemplate({ text, children, dataTest }) {
    return (
        <>
            <h1 data-test={dataTest}>{text}</h1>
            {children}
        </>
    )
}