import{StyleSheet} from 'react-native';

 export default StyleSheet.create({
    root:{
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
        marginVertical:5,
        padding:5,
        borderRadius:10,
        shadowColor: '#B1B4B7',
        shadowOpacity:.5,
        shadowRadius: 55,
        shadowOffset: {
        width: 0,
        height: 1,
        },
        height:150,
        backgroundColor:"#fff",
        elevation:8,
    },
    image:{       
        height:'100%',
        flex:1,
        marginHorizontal:2,
        resizeMode:"contain",
        borderRadius:2,
        overflow:'hidden'
    },
    rightContainer:{
        flex:2,
        padding:5,

        overflow:'hidden'
    },
    top:{
        flex:.5,
        paddingVertical:10,
        margin:5,
    },
   title:{
    fontSize:20,
    fontWeight:'400'
   },
    bottom:{
        flex:.5,
        flexDirection:'row',
        marginVertical:2,
        alignItems:'center'
    },
    num:{
        fontSize:18,
       color:'#5E97D1'
    },
    shadow:{
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
        width: 0,
        height: 1,
    }},
    maskRoot:{
        flex:.5,
        flexDirection:'row',
        alignItems:'center',
        marginRight:10,
        backgroundColor:'#F6F9FA',
        minWidth:100,
        padding:5
    }
})
