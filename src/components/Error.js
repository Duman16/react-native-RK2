import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Error =({ message, onRetry})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.errorText}>{message}</Text>
                <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
                    <Text style={styles.retryText}>Retry</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    errorText:{
        color:'red',
        textAlign:'center',
        fontSize:16,
        marginBottom:10,
    },
    retryButton:{
        backgroundColor:'#1e88e5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius:5,
    },
    retryText:{
        color: 'white',
        fontWeight:'bold',
    },
});

export default Error;