import React, {  useEffect, useContext, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, RefreshControl , Text} from 'react-native';
import { fetchTopHeadlines } from '../services/newsService';
import NewsItem from '../components/NewsItem';
import Error from '../components/Error';
import {FavoritesContext} from '../context/FavoritesContext';

const HomeScreen = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const { isFavorite } = useContext(FavoritesContext);

    const loadNews = async () => {
        try {
            setError(null);
            const data = await fetchTopHeadlines();
            if(Array.isArray(data)) {
                setNews(data);
            } else {
                throw new Error('Invalid data from API');
            }
        } catch (err) {
            setError(err.messege || 'Failed to load news');
            setNews([]);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };
    
    useEffect(() => {
        loadNews();
    },[]);

    const handleRefresh = () => {
        setRefreshing(true);
        loadNews();
    };

    const handlePress = (item) => {
        navigation.navigate('NewsDetails', { newsItem: item});
    };

    if (loading && !refreshing){
        return (
            <View style ={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    if (error) {
        return <ErrorMessage message={error} onRetry={loadNews} />;
    }

    return(
        <View style= {styles.container}>
            <FlatList
                data={news}
                keyExtractor ={(item) => item.id?.toString() || Math.random().toString()}
                renderItem={({item}) => (
                    <NewsItem
                        item={item}
                        onPress={() => handlePress(item)}
                        isFAvorite={isFavorite?.(item.id)} />
                )}
                refreshControl ={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
                ListEmptyComponent = {
                    <Text style={styles.EmptyText}> No news available</Text>
                }
            />
        </View>             
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        color: '#888',
    },
});
   
export default HomeScreen;