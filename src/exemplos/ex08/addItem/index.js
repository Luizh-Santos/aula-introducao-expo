
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/MaterialCommunityIcons';


import styles from './styles';
import { Children, useState } from 'react';
import uuid from 'react-native-uuid';

export default function AddItem({addItems}) {

    const [text, setText] = useState('');
return (
    <View style={styles.container}>
        <TextInput
        placeholder='Adicionar Item...'
        style={styles.input}
        onChangeText={txt => setText(txt)}
        value={text}
        />
        <TouchableOpacity style={styles.button} onPress={()=> addItems(text)}>
            <Text style={styles.buttonText}>
                <MaterialCommunityIcons name='plus'
                 size={30} 
                 color='#FFFFFF'
                 />
                 Adicionar Item
            </Text>
        </TouchableOpacity>
        </View>
);
};



