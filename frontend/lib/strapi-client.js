export default class StrapiClient {
    constructor () {}

    async fetchData(path) {
        const queryURL = `${process.env.NEXT_PUBLIC_STRAPI_BASEURL}${path}`;
        const response = await fetch(queryURL);
        const data = await response.json();
        return data;
    }
}