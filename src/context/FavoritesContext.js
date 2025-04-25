import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorites');
            if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
        } catch (error) {
            console.error('Error loading favorites', error);
        }
    };

    const addFavorite = async (item) => {
        const newFavorites = [...favorites, item];
        setFavorites(newFavorites);
        await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const removeFavorite = async (id) => {
        const newFavorites = favorites.filter(item => item.id !== id);
        setFavorites(newFavorites);
        await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const isFavorite = (id) => favorites.some(item => item.id === id);

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite,
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};