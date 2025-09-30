
import { View, Text, TextInput, TouchableOpacity} from 'react-native';


import styles from './styles';
import { useState } from 'react';

export default function Exemplo05() {

    const [textoEscrito, settextoEscrito] = useState('');
    const [mensagem, setMensagem] = useState('Texto Programado');

    function Exibetexto  ()  {
        setMensagem(textoEscrito);
        settextoEscrito('');
    }

    return (
        <View> style={styles.container}
            <Text>style={styles.paragraph}
                Exemplo 5
            </Text>

            <Text> style={styles.txtSaida}
                {mensagem}
            </Text>

            <TextInput style={styles.txtEntrada}
                onChangeText={(entrada) => settextoEscrito(entrada)}
                value={textoEscrito} />

            <TouchableOpacity style={styles.button} onPress={Exibetexto}>
                <Text style={styles.textButton}>Exibir texto</Text>
            </TouchableOpacity>

       
    


  
     </View>
);}



