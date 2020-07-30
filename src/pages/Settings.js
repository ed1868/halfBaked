import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import MenuList from './../components/MenuList';
import { evoScrollContainer, evoCommonHeading } from './../styles/commonStyles';
import settingsSupportList from './../constants/settingsSupportList';
import colors from '../styles/colors';

const Settings = (props) => {
    const [pushNotification, setPushNotification] = useState(true);
    const [syncContacts, setSyncContacts] = useState(false);
    return (
        <ScrollView style={{ ...evoScrollContainer, ...{ flex:1,paddingTop: 20 } }}>
            <Text style={{ ...evoCommonHeading, ...styles.settingsHeader }}>Default</Text>
            <View style={styles.settingsMenuWrapper}>
                <View style={styles.settingMenu}>
                    <Text style={styles.menuText}>Push Notifications</Text>
                    <Switch
                        value={pushNotification}
                        color={colors.primary}
                        onValueChange={() => {
                            setPushNotification(!pushNotification);
                        }
                        }
                    />
                </View>
                <View style={styles.settingMenu}>
                    <Text style={styles.menuText}>Sync Contacts</Text>
                    <Switch
                        value={syncContacts}
                        color={colors.primary}
                        onValueChange={() => {
                            setSyncContacts(!syncContacts);
                        }
                        }
                    />
                </View>
            </View>
            <Text style={{ ...evoCommonHeading, ...styles.settingsHeader }}>Support</Text>
            <MenuList menuData={settingsSupportList} navigation={props.navigation} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    settingsHeader: {
        marginLeft: 20
    },
    settingsMenuWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    settingMenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 45,
        paddingLeft:25,
        paddingRight:10
    },
    menuText: {
        fontSize: 20,
    }
});
export default Settings;