import React from 'react';
import { View,Text,Image, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const Logo = ({ url }) => {
    return (
        <View style={styles.logoWrapper}>
            <Text style={styles.logoTxt}>HalfBaked</Text>
            {/* <Text style={styles.amigoTxt}>Amigos y Amigos</Text> */}
            <Image source={url} style={styles.logo} />            
        </View>
    );
};

const styles = StyleSheet.create({
    logoWrapper:{
        marginTop: 20,
        display:"flex",
        justifyContent:'center',
        alignContent:'center',
        position:'relative',
        flexDirection:'row'
    },
    logo: {
        width: 30,
        height: 30,
        position:'absolute',
        right:40,
        top:0
    },
    logoTxt:{
        fontSize:64,
        fontFamily:'Lobster-Regular',
        color:colors.primary,
    }
    ,
    amigoTxt:{
        fontSize:46,
        fontFamily:'Lobster-Regular',
        color:colors.primary,
    }
});

export default Logo;