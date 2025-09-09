import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#E3F2FD',
            padding: 8,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly'

        },

        titulo: {
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            color: '#1E88E5',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',

        },

        txt: {
            fontSize: RFPercentage(2.2),
            color: '#1E88E5',
            fontWeight: 'bold'
        },

        botao: {
            backgroundColor: "#0D47A1",
            width: '50%',
            borderRadius: RFPercentage(1),
            padding:RFPercentage(1),
            alignItems: 'center',


        },

        txtBotao: {
            color: "#FAFAFA",
            fontSize: RFPercentage(2),
            

        },


    }
);

export default styles;