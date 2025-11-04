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
    txtItem:{
        fontsize:RFValue(16),
    }
});

export default styles;