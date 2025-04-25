import React, { useContext } from   "react";
import {View, FlatList, Text, StyleSheet} from 'react-native';
import NewsItem from '../components/NewsItem';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoritesScreen =({navigation}) => {
    const{ favorites } = useContext(FavoritesContext);
    const handlePress = (item) => {
        navigation.navigate("Detail", { newsItem: item });
    };
    if ( favorites.length === 0) {
        return(
            <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favorites yet</Text>
            <Text style={styles.emptySubtext}>Tap the heart icon to add news to favorites</Text>
        </View>
        );
    }
    return(
        <View style={styles.container}>
        <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <NewsItem
                    item={item}
                    onPress={() => handlePress(item)}
                    isFavorite={true}
                />
            )}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    emptyContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#555',
    },
    emptySubtext:{
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    },
});

export default FavoritesScreen;