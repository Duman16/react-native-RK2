import axios from 'axios';

const API_KEY = '880c57bab0bf457897e6e353d9a14809';
const BASE_URL = 'https://newsapi.org/v2/';

export const fetchTopHeadlines = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params:{
                country: 'us',
                apiKey: API_KEY,
                pageSize: 20,
            }
        });
        return response.data.articles.map((article, index) =>({
            ...article,
            id: `${index} -${new Date(article.publishedAt).getTime()}`
        }));
    } catch (error) {
        console.error('Error fetching:', error);
        throw error;
    }
};