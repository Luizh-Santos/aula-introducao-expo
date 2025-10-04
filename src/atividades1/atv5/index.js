
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


import styles from './styles';
import { useState } from 'react';

export default function Exemplo05() {

    const [textoEscrito, setTextoEscrito] = useState('');
    const [textoEscrito2, setTextoEscrito2] = useState('');
    const [mensagem, setMensagem] = useState('Inserir o nome e sobrenome');
    const [mensagem2, setMensagem2] = useState('');

    const ExibeTexto = () => {
        setMensagem(textoEscrito);
        setTextoEscrito(' ');
        setMensagem2(textoEscrito2);
        setTextoEscrito2(' ');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Atividade 5
            </Text>

            <Text style={styles.txtSaida}>
                {mensagem}

                {mensagem2}
            </Text>


            <Text style={styles.text}>
                Nome
            </Text>

            <TextInput style={styles.txtEntrada}
                onChangeText={(entrada) => setTextoEscrito(entrada)}
                value={textoEscrito}
            />
            <Text style={styles.text}>
                Sobrenome
            </Text>

            <TextInput style={styles.txtEntrada}
                onChangeText={(entrada2) => setTextoEscrito2(entrada2)}
                value={textoEscrito2}
            />
            <TouchableOpacity style={styles.button} onPress={ExibeTexto}>
                <Text style={styles.textButton}>Exibir texto</Text>
            </TouchableOpacity>






        </View>
    );
}



