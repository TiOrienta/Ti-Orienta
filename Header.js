import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Header(){
    return(
        <View style = {style.containerBack}>
            <View style = {style.container}>
                <View style = {style.Procurar}>
                    <Text> Para onde quer ir? </Text>
                </View>
            </View>
        </View>    
    );
}



const style = StyleSheet.create({
    container:{
        backgroundColor: '#005EEB',
        alignItems: 'center',
        paddingTop: 30 ,
        paddingBottom: 20,
        justifyContent: 'flex-start',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    containerBack:{
        backgroundColor: '#4891FF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 0,
        height: 200,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    Procurar:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 200,
        height: 50,

        
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})
export default Header;