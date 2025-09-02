import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#ffffffff',
            borderWidth: RFPercentage(0.6),
            padding: 8,
            width:'90%',
            alignItems:'flex-end',
            marginBottom:RFPercentage(1),
            borderRadius: 20 ,
        },

        titulo: {
            fontSize: RFPercentage(1.5),
            fontWeight: 'bold',
            color: '#121212',
            marginBottom: RFPercentage(1),
           
        },

      
         descricao: {
            fontSize: RFPercentage(1),
           
        },
        valor:{
                color:'#B71C1C',
        },
        
    }
);

export default styles;