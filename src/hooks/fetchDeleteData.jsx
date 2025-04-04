const fetchDeleteData = async (query, data) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    try {
        const response = await fetch(`${baseUrl}${query}${data}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseData = await response.json(); // Parse the JSON response

        if (response.ok) {
            return 'success';
        } else {
            return 'failed';
        }
    } catch (error) {
        return "failed";
    }
};

export default fetchDeleteData;
