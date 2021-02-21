import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height: Dimensions.get('window').height
      },
      titles:{
        marginTop: '20%',
        width: '100%',
        alignItems: 'center'
      },
      title:{
        fontSize: 40,
        fontWeight: 'bold'
      },
      texts:{
        marginTop: '10%',
        paddingHorizontal:30,
        alignItems:'center',
        justifyContent:'center'
      },
      text:{
        fontSize: 20,
        color:'green',
        fontWeight: 'bold'
      },
      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position:'absolute'
      },
      footerContainer:{
        position:'absolute',
        bottom: 40,
        width: '100%'
      }

});
export default styles;