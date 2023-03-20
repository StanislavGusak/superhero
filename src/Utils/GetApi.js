import axios from "axios";

export const GetApi = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.log('Page not found', res.status)
            return false;
        }

        const limit = await axios.get(url, {
            params: {
                limit: 40
            }
        });

        return limit;
    } catch (error) {
        console.log('Page not found', error.message)
        return false;
    }
}








