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
            width: '50%',
            borderRadius: RFPercentage(1),
            padding:RFPercentage(1),
            alignItems: 'center',
            marginTop:RFPercentage(2)
        },
         textButton: {
            color: "#FAFAFA",
            fontSize: RFPercentage(2),
            
        },
        txtSaida:{
            margin:24,
            fontSize:22,
            fontWeight:'bold',
            textAlign:'center',
            color:'#E53935',
        },
        txtEntrada:{
            borderWidth:4,
            textAlign:'center',
            fontSize:'22',
            borderColor:'#B71C1C',
            height:40,
            color:'#E53935',
            borderRadius:10,
               
        
        },
          container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFCDD2',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#B71C1C',
    },

    }
);

export default styles;