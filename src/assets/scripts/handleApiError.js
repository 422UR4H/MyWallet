export default function handleApiError(err) {
    // test and alelrt when err is undefined
    console.error(err.response);
    alert(err.response?.data);
}