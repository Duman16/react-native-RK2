import React, { useContext} from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import {WebView} from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FavoritesContext } from '../context/FavoritesContext';

const NewsDetailScreen =({ route, navigation }) => {
    const{ newsItem } = route.params;
    const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

    const handleFavoritePress =() => {
        if (isFavorite(newsItem.id)) {
            removeFavorite(newsItem.id);
        } else {
            addFavorite(newsItem);
        }
    };

    const handleLinkPress = () => {
        if ( newsItem.url){
            Linking.openURL(newsItem.url);
        }
    };

    return(
        <ScrollView style = {styles.container}>
            <Image source={{uri: newsItem.urltoImage || 'https://via.placeholder.com/150'}} style={styles.image} resizeMode="cover" />

            <View style={styles.header}>
                <TouchableOpacity onPress={handleFavoritePress} style = {styles.favoriteButton}>
                    <Ionicons 
                    name={isFavorite(newsItem.id) ? 'heart' : 'heart-outline'} 
                    size={24} 
                    color={isFavorite(newsItem.id) ? 'red' : '#000'} />
                </TouchableOpacity> 
            </View>

            <Text style={styles.source}>
                {newsItem.source?.name || 'Unknown source' } • {new Date(newsItem.publishedAt).toLocaleDateString()}
            </Text>
            <Text style={styles.content}> 
                {newsItem.content || newsItem.description || 'No content available'}
            </Text>
            
            {newsItem.url && (
    <TouchableOpacity onPress={handleLinkPress} style={styles.readMoreButton}>
        <Text style={styles.readMoreText}> Read full article </Text>
    </TouchableOpacity>
)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 250
    },
    header:{
        flexDirecrtion: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 15,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        marginBottom: 10,
    },
    favoriteButton:{
        padding: 5,
    },
    source:{
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    content:{
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 15,
        marginBottom: 20,

    },
    readMoreButton: {
        backgroundColor: '#1e88e5',
        padding: 15,
        margin: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    readMoreText:{
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default NewsDetailScreen;