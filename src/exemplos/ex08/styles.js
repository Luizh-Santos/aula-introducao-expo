import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({


    titulo: {
        fontSize: RFValue(3),
        color: '#0D47A1',
        fontWeight: 'bold',
        borderwidth: 2,
        bordercolor: '#0D47A1',
        margintop: 10,
        marginbottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    cabecalho:{
        backgroundColor: '#0D47A1',
        width:'100%',
        padding:RFPercentage(2),
        alignItems:'center',
        color:'#FFFFFF',
        fontSize:RFValue(20),
        textAlign:'center',
    },
    lista:{
        marginTop:RFValue(10),
        width:'100%',
    }
});

export default styles;