import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {

        container:{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#BBDEFB',
            padding: 8,
        },

        input: {

            height: 80,
            width: '50%',
            textAlign: "center",
            fontSize: 50,
            marginTop: 24,
            color: '#0D47A1',
        },

        button: {
            backgroundColor: "#0D47A1",


        },
        textButton: {
            fontSize: 25,
            color: "#64B5F6",
            padding: 30,
            alignSelf: 'center',
            fontWeight: 'bold',


        },
        resultados: {
            alignSelf: 'center',
            color: '#0D47A1',
            fontSize: 65,
            padding: 15,
        },

        paragraph: {
            margin: 6,
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#0D47A1',
        },

        entradaImc: {
            flex: 1,
            flexDirection: 'row',

        },
    }
);

export default styles;