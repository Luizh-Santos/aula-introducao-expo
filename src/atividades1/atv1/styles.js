import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#FFEBEE',
            padding: 8,
            flex: 1,
            alignItems: 'center',
        },

        titulo: {
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            color: '#F44336',
            borderWidth: 2,
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },

        txt: {
            fontSize: RFPercentage(2.2),
            color:'#F57F17',
        
        },

        txt1:{
            fontSize: RFPercentage(5),
            color:'#F4511E',
        }
    }
);

export default styles;