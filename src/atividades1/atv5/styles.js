import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {



        input: {
            borderColor: '#0D47A1',
            borderWidth: RFPercentage(0.5),
            width: '80%',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(1.5),
            textAlign: "center",
            fontSize: RFPercentage(2)
        },

        button: {
            backgroundColor: "#E53935",
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
        },
        textButton: {
            fontSize: 22,
            color: "#Ffcdd2",
            textAlign: 'center',

        },
        txtSaida: {
            margin: 24,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#E53935',
        },
        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#b71c1c',
            height: 40,
            color: '#E53935',
            borderRadius: 10,
            marginTop: 10,


        },
        paragraph: {
            margin: 24,
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#b71c1c',
        },

        text: {
            margin: 24,
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#b71c1c',
        }

    }
);

export default styles;