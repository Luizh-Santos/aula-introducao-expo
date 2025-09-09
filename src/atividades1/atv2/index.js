import { View, Text, Image } from 'react-native';

import styles from './styles';


import Mensagem from './mensagem';

export default function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            {/* <Image source={img} style={styles.imagem}/> */}

            <Mensagem titulo={'Camisa Branca e Preta'}
                descricao={'Camisa com listras largas, modelo 2024'}
                valor={'R$350'}>
            </Mensagem>
            <Mensagem titulo={'Camisa Preta'}>Camisa com listras largas, modelo 2024</Mensagem>
            <Mensagem titulo={'Aviso'}>O Tempo Acabou!</Mensagem>

        </View>
    );
}

