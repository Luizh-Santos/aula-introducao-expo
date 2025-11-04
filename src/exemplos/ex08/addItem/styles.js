import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({


    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: RFValue(10),
        paddingBottom: RFValue(2),
        borderBottom: RFValue(2),
        borderBottomWidth: RFValue(3),
        borderColor: '#0D47A1',
        width: '100%',
    },
    input:{
        height:RFValue(50),
        fontSize:RFValue(16),

    },
    button:{
        backgroundColor:'#0D47A1',
padding:RFValue(5)
    },
    buttonText:{
        color:'#0D47A1',
        fontSize:RFValue(20),
        textAlign:'center',
    }

});

export default styles;