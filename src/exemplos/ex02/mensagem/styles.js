import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#0D47A1',
            borderWidth: RFPercentage(0.6),
            padding: 8,
            width:'90%',
            alignItems:'center',
            marginBottom:RFPercentage(1),
            borderRadius: 20 ,
        },

        titulo: {
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            color: '#121212',
            marginBottom: RFPercentage(1),
           
        },

       texto: {
          fontSize:RFPercentage(2.2),
          color:'#fafafa',
        },
    }
);

export default styles;