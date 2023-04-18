import axios from "axios";

export const GetApi = async (url) => {

    try {
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








