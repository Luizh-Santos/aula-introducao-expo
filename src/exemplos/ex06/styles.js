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
            backgroundColor: "#0D47A1",
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
           
        },
        textButton: {
            fontSize: 22,
            color: "#64B5F6",
            textAlign: 'center',
            

        },

        textLabel: {
            fontSize: 16,
            color: "#0D47A1",
             fontWeight: 'bold',
        },
        txtSaida: {
            margin: 24,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#0D47A1',
           
        },
        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#0D47A1',
            height: 40,
            color: '#0D47A1',
            borderRadius: 10,
           


        },
        paragraph: {
            margin: 24,
            fontSize: 26,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#0D47A1',
        },

    }
);

export default styles;