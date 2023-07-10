export default function handleApiError({ response }) {
    console.error(response);
    if (response) alert(response.data);
}