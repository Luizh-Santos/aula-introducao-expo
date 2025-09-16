import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'white',
            alignItems: 'center',
            flex: 1,

        },

        titulo: {
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            color: '#0D47A1',
            margin: RFPercentage(5),
            alignItems: 'center'
        },

        txt: {
            fontSize: RFPercentage(2.2),
        },

        input: {
            borderColor: '#0D47A1',
            borderWidth: RFPercentage(0.5),
            width: '80%',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(1.5),
            textAlign: "center",
            fontSize: RFPercentage(2)
        },

         botao: {
            backgroundColor: "#0D47A1",
            width: '50%',
            borderRadius: RFPercentage(1),
            padding:RFPercentage(1),
            alignItems: 'center',
            marginTop:RFPercentage(2)
        },
         txtBotao: {
            color: "#FAFAFA",
            fontSize: RFPercentage(2),
            

        },

    }
);

export default styles;