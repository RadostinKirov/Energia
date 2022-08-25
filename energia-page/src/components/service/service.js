

export async function getAllHomeData() {

    try {
        let response = await fetch('http://localhost:1337/api/home-page-contents', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                "Access-Control-Allow-Credentials": "true",

            },
        })

        let data = response.json();

        return data;
    } catch (err) {
        throw (err);
    }

}
