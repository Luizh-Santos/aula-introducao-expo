import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04() {

    const [texto, setTexto] = useState('')
    const [txt2, setTxt2] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleExibeMensagem() {
        setMensagem(txt2);
        setTxt2('');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{texto}</Text>

            <TextInput
                onChangeText={setTexto}
                placeholder='Texto de fundo'
                keyboardType='visible-password'
                maxLength={10}
                style={styles.input}



            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput
                onChangeText={setTxt2}
                placeholder='Digite seu Número'
                keyboardType='number-pad'
                maxLength={5}
                style={styles.input}
                value={txt2}



            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibeMensagem()}>

                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </TouchableOpacity>
        </View>
    );
}

