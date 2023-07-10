export default function MainTemplate({ text, children }) {
    return (
        <>
            <h1>{text}</h1>
            {children}
        </>
    )
}