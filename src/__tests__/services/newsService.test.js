import {fetchTopHeadlines} from '../../services/newsService';
import axios from 'axios';  

jest.mock('axios');

describe('newsService', () => {
    beforeEach(() => {
        axios.get.mockClear();
    });
    it('fetches top headlines successfully', async() => {
        const mockData ={
            articles: [
                {
                    title: 'Test Title 1',
                    description: 'Description 1',
                    publishedAt: '2025-01-01T00:00:00Z',
                    source: {
                        name: 'Test source 1'
                    },
                    uyrlToImage: 'https://example.com/image1.jpg',
                },
                {
                    title: 'Test Title 2',
                    description: 'Description 2',
                    publishedAt: '2025-01-02T00:00:00Z',
                    source: {
                        name: 'Test source 2'
                    },
                    uyrlToImage: 'https://example.com/image2.jpg',
                }
            ]
        };
        axios.get.mockResolvedValue({data: mockData});

        const result = await fetchTopHeadlines();
        expect(axios.get).toHAveBeenCalledWith('https://newsapi.org/v2/top-headlines',{
            params: {
                country: 'us',
                apiKey: '880c57bab0bf457897e6e353d9a14809',
                pageSize: 20,
        }
        });
        expect(result).toEqual([
            {
                ...mockData.articles[0],
                id: '0 -1704067200000',
            },
            {
                ...mockData.articles[1],
                id: '1 -1704153600000',
            }
        ]);
    });

    it('handles fetch error' , async () => {
        axios.get.mockRejectedValue(new Error('Network error'));
        await expect(fetchTopHeadlines()).rejects.toThrow('error fetching news'); 
    });
});