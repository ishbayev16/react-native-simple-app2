import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';


export default function Home({navigation}){

    const pressHandler = () =>{
        // navigation.navigate('ReviewDetails');
        navigation.push('ReviewDetails');

    }

    const [reviews, setReviews] = useState([
        {title: "first title", rating: 5, body: "first body", key:"1"},
        { title: "first title2", rating: 3, body: "first body2", key: "2" },
        { title: "first title3", rating: 2, body: "first body3", key: "3" },
        {title: "first title4", rating: 1, body: "first body4", key:"4"},
    ]);


    return(
        <View style={globalStyles.container}>
            

            <FlatList 
                data = {reviews}
                renderItem = {({item})=> (
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}
