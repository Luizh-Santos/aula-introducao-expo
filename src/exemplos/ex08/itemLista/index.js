
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons/MaterialIcons';


import styles from './styles';
import { Children, useState } from 'react';
import uuid from 'react-native-uuid';

export default function ItemLista({Children,id,deleteItem}) {
return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.txtItem}>{Children}</Text>
        <MaterialIcons name='delete-outline' 
        size={26} 
        color='#B71C1C' 
        onpress={()=>deleteItem(id)}
        />   
    </TouchableOpacity>
);
};



