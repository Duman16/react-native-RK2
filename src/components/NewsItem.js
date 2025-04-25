import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewsItem = ({ item, onPress, isFavorite }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
            source={{ uri: item.urlToImage  || 'https://via.placeholder.com/150' }}
            style={styles.image}
            resizeMode="cover"
            />
            <View style={styles.content}>
                <Text style= {styles.little} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={3}>{item.description || 'No description available'}</Text>
                <View style={styles.footer}>
                    <Text style={styles.source}>{item.source?.name || 'Unknown source'} </Text>
                    <Ionicons 
                    name ={isFavorite ? 'heart' : 'heart-outline'}
                    size={20}
                    color={isFavorite ? 'red' : 'gray'}/>
            </View>
        </View>    
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        overflow: 'hidden',
    },
    image:{
        width: 120,
        height: '100%',
        aspectRatio: 1,

    },
    content:{
        flex: 1,
        padding: 10,
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description:{
        fontSize:14,
        color: '#666',
        marginBottom: 5,
    },
    footer:{
        flexDirection:'row',
        justifyContent: 'spaace-between',
        alignItems:'center', 
        marginTop: 5,
    },
    source:{
        fontSize: 12,
        color: '#888',
        fontStyle: 'italic',
    },
});

export default NewsItem;