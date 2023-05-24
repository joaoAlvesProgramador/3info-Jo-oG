import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input:{
        width: '60%',
        height: 60,
        borderTopLeftRadius:9,
        borderTopRightRadius:9,
        borderBottomColor:'#88f',
        borderBottomWidth:3,
    },
    theme:{
        color:'#000',
        marginBottom:5,
        fontSize:18,
        fontWeight:'bold',
    },
    textH:{
        fontWeight:'bold',
        fontSize: 20, 
        paddingTop: 5, 
        paddingBottom: 10,
    },
    header:{
        width:'100%',
        height:80,
        backgroundColor:'#88f',
        paddingTop:10,
        marginBottom:20,
    },
    headerH:{
        width:'100%',
        height:80,
        backgroundColor:'#88f',
        paddingTop:10,
    },
    boxP:{
        width:'70%',
        height:230,
        marginTop:-10,
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:8,
    },
    boxA:{
        width:'70%',
        height:230,
        marginTop:10,
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:8,
    },
});

export default styles;