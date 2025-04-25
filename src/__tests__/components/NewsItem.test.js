import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NewsItem from '../../components/NewsItem';

describe('NewsItem', () => {
    const mockItem ={
        id: '1',
        title: 'Test title',
        description: 'Test description',
        url: 'https://example.com',
        source: { name: 'Test Source' },
    };
    it ('renders corretly with provided props', () => {
        const{ getByText, getByTestId} = render(<NewsItem item={mockItem} />);

        expect(getByText('Test title')).toBeTruthy();
        expect(getByText('Test description')).toBeTruthy();
        expect(getByText('Test Source')).toBeTruthy();
        expect(getByTestId('news-item')).toBeTruthy();
    });
    it('calls onPress when pressed', () => {
        const mockOnPress = jest.fn();
        const{getByText} = render( <NewsItem item={mockItem} onPress={mockOnPress} />);
        fireEvent.press(getByText('Test title'));
        expect(mockOnPress).toHaveBeenCalledTimes();
    });

    it('shows filled heart when isFAvorite is true', () => {
        const {getByTestId} = render( <NewsItem item={mockItem} isFavorite={true} />);

        expect(getByTestId('favorite-icon').props.name).toBe('heart');
    });

    it('shows outline heart when isFavorite is false', () => {
        const{getByTestId} = render( <NewsItem item={mockItem} isFavorite={fales} />);
        expect(getByTestId('favorite-icon').props.name).toBe('heart-outline');
    });
});