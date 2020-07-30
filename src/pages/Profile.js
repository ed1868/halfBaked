import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import colors from '../styles/colors';
import { evoInputDefault, evoBlankContainer, evoCommonHeading,evoDefaultBtn } from './../styles/commonStyles';

class Profile extends React.Component {

    state = {
        name: '',
        email: ''
    }

    render() {
        return (
            <View style={evoBlankContainer}>
                <Text style={evoCommonHeading}>Update your account</Text>
                <TextInput
                    mode={'outlined'}
                    label='Name'
                    style={evoInputDefault}
                    value={this.state.name}
                    theme={{ colors: { primary: colors.primary } }}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                    mode={'outlined'}
                    label='Email'
                    style={evoInputDefault}
                    value={this.state.email}
                    theme={{ colors: { primary: colors.primary } }}
                    onChangeText={email => this.setState({ email })}
                />
                <Button mode="contained"
                    dark={true}
                    theme={{ colors: { primary: colors.primary } }}
                    style={evoDefaultBtn}
                    onPress={() => console.log("test")}>
                    Update
                </Button>
            </View>
        );
    }
}

export default Profile;