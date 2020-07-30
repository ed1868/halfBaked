import React from 'react';
import Logo from './../components/Logo';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import colors from './../styles/colors';
import { evoInputDefault, evoBlankContainer,evoScrollContainer } from './../styles/commonStyles';
import { color } from 'react-native-reanimated';

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        username: '',
        password: '',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={evoScrollContainer}>
                <View style={evoBlankContainer}>
                    <Logo url={require("./../assets/logo.png")} />
                    <TextInput
                        mode={'outlined'}
                        label='Username'
                        style={evoInputDefault}
                        value={this.state.username}
                        theme={{ colors: { primary: colors.primary } }}
                        onChangeText={username => this.setState({ username })}
                    />

                    <TextInput
                        mode={'outlined'}
                        label='Password'
                        style={evoInputDefault}
                        value={this.state.password}
                        secureTextEntry={true}
                        theme={{ colors: { primary: colors.primary } }}
                        onChangeText={password => this.setState({ password })}
                    />

                    <Button mode="contained"
                        dark={false}
                        
                        theme={{ colors: { primary: colors.primary } }}
                        style={styles.loginBtn}
                        onPress={() => navigate('Home')}>
                        Sign In
                    </Button>

                    <Button mode="outlined"

                        theme={{ colors: { primary: colors.primary } }}
                        style={styles.loginBtn}
                        onPress={() => navigate('Register')}>
                        Sign Up
                    </Button>

                    <Text style={styles.anchorText} onPress={() => navigate('ForgotPassword')}>
                        Forgot Password ?
                </Text>

                    <Text style={styles.plainLbl}>Sign In With</Text>
                    <View style={styles.socialMediaWrapper}>
                        <Button mode="contained"
                            dark={false}
                            theme={{ colors: { primary:  colors.social } }}
                            style={styles.socialMedia}
                            icon="google"
                            onPress={() => navigate('Register')}>
                            Google
                    </Button>
                        <Button mode="contained"
                            dark={false}
                            theme={{ colors: { primary: colors.social } }}
                            style={styles.socialMedia}
                            icon="facebook"
                            onPress={() => navigate('Register')}>
                            Facebook
                    </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    logoTxt: {
        fontSize: 24
    },
    anchorText: {
        fontSize: 16,
        marginTop: 15,
        color: colors.primary,
        justifyContent: 'flex-end'
    },
    loginBtn: {
        width: '100%',
        padding: 5,
        marginTop: 15
        
    },
    socialMediaWrapper: {
        width: '100%'
    },
    socialMedia: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 15,
        height: 50,
    },
    plainLbl: {
        fontSize: 18,
        marginTop: 100,
        marginBottom: 15,
        color: 'white'
    }
})


export default LoginScreen;