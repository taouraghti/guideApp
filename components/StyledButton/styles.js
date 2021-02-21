import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container:{
        width: '100%',
        alignItems:'center',
        padding: 10
   }, 
    button:{
        backgroundColor: 'yellow',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width:'40%',
        borderRadius: 20
   },
   text:{
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold'
   }
});
export default styles;