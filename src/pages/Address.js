import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-paper';
import { evoScrollContainer, evoDefaultBtn } from './../styles/commonStyles';
import colors from '../styles/colors';
import addressList from './../constants/addressList';

const Address = (props) => {
    props.navigation.state
    return (
        <ScrollView style={evoScrollContainer}>
            {
                addressList.map((address,index) => {
                    return <Card elevation={5} style={styles.addressCardWrapper} key={`address-${index}`}>
                        <Card.Content>
                            <View style={styles.addressWrapper}>
                                <Icon name={address.icon} size={26} color={colors.primary} style={styles.addIcon} />
                                <View style={styles.addressTxt}>
                                    <Text style={styles.titleTxt}>{address.name}</Text>
                                    <Text style={styles.titleTxt}>{address.add}</Text>
                                </View>
                            </View>
                            <View style={styles.addressBtnWrapper}>
                                <Button mode="text"
                                    dark={true}
                                    theme={{ colors: { primary: colors.primary } }}
                                    onPress={() => console.log("Edit Address")}>
                                    EDIT
                            </Button>
                                <Button mode="text"
                                    dark={true}
                                    theme={{ colors: { primary: colors.primary } }}
                                    onPress={() => console.log("Del Address")}>
                                    DELETE
                            </Button>
                            </View>
                        </Card.Content>
                    </Card>
                })
            }
            <Button mode="contained"
                dark={true}
                theme={{ colors: { primary: colors.success } }}
                style={styles.newAddBtn}
                onPress={()=>console.log("Add new address")}>
                Add New Address
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    addressCardWrapper: {
        margin: 10
    },
    addressWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    addIcon: {
        flex: 1
    },
    addressTxt: {
        flex: 5
    },
    addressBtnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    titleTxt: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'bold'
    },
    newAddBtn:{
        margin:15,
        padding:10
    }
});

export default Address;

