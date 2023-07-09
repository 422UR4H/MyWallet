export default function handleApiError(err) {
    console.error(err.response.data);
    alert(err.response.data);
}