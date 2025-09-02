import { View, Text, Image } from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';

import Mensagem from './mensagem';

export default function Exemplo02() {
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 2</Text>
        <Image source={img} style={styles.imagem}/>

        <Mensagem titulo={'ERRO'}>Você não cliclou corretamente!</Mensagem>
        <Mensagem titulo={'Sucesso'}>Acesso Permitido</Mensagem>
        <Mensagem titulo={'Aviso'}>O Tempo Acabou!</Mensagem>
      
        </View>
    );
} 

