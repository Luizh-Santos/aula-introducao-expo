
import { View, Text, TextInput, TouchableOpacity,Alert,Platform, FlatList } from 'react-native';


import styles from './styles';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import ItemLista from './itemLista';
import AddItem from './AddItem';

export default function Exemplo08() {

    const [items, setItems] = useState([
        { id: uuid.v4(), text: 'Leite Integral' },
        { id: uuid.v4(), text: 'Pão de Forma' },
        { id: uuid.v4(), text: 'Nescau' },
        { id: uuid.v4(), text: 'Manteiga' },
    ]);

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    }
    function addItems(text) {
        if(text ===''){
            if(text ==='web'){
           alert('Erro','O valor do item não pode ser vazio');

        }else{

            Alert.alert('Erro','O valor do item não pode ser vazio',[{text:'OK'}]);
        }
    }else{
        setItems(prevItems => {
            return [{id: uuid.v4(), text}, ...prevItems];
        
        });
        }
    }

console.log(Platform.OS);


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Exemplo 8
            </Text>

            <Text style={styles.cabecalho}> Lista de Compras</Text>
            <addItem addItems={addItems}/>
            <FlatList 
            data={items}
            renderItem={
            ({ item }) => 
            <ItemLista id={item.text} deleteItem={deleteItem}>
            {item.text}
            </ItemLista>}
            style={styles.lista}
            />


        </View>
    );
};



