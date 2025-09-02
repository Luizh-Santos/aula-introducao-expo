import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#fff',
            padding: 8,
            flex: 1,
            alignItems: 'center',
            borderRadius: 20,
        },

        titulo: {
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            color: '#ffffffff',
            borderWidth: 2,
            borderColor: '#ffffffff',
            marginTop: 1,
            marginBottom: 1,
            padding: 8,
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },
       
        imagem: {
            widht: '100%',
            resizeMode: 'center',
        },
        

    }
);

export default styles;