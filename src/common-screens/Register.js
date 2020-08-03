import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "./../components/Logo";
import {
  evoInputDefault,
  evoBlankContainer,
  evoScrollContainer,
  evoRegisterContainer,
} from "./../styles/commonStyles";
import SegmentedControlTab from "react-native-segmented-control-tab";
import DatePicker from "react-native-datepicker";
import colors from "../styles/colors";

export default class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPwd: "",
    selectedIndex: 0,
    date: "",
  };

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  handleSignUp = () => {
    // TODO - MAKE SIGN UP LOGIC

    const { navigate } = this.props.navigation;
    navigate("Home");
  };

  render() {
    
    
    return (
      <ScrollView style={evoScrollContainer}>
        <View style={evoRegisterContainer}>
          <Logo url={require("./../assets/icons/flower.jpg")} />
          <TextInput
            mode={"outlined"}
            label="Full name"
            style={evoInputDefault}
            value={this.state.name}
            theme={{ colors: { primary: colors.primary } }}
            onChangeText={(name) => this.setState({ name })}
          />
          <TextInput
            mode={"outlined"}
            label="Email"
            style={evoInputDefault}
            value={this.state.email}
            theme={{ colors: { primary: colors.primary } }}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            mode={"outlined"}
            label="Password"
            style={evoInputDefault}
            secureTextEntry={true}
            value={this.state.password}
            theme={{ colors: { primary: colors.primary } }}
            onChangeText={(password) => this.setState({ password })}
          />
          <TextInput
            mode={"outlined"}
            label="Confirm Password"
            secureTextEntry={true}
            style={evoInputDefault}
            value={this.state.confirmPwd}
            theme={{ colors: { primary: colors.primary } }}
            onChangeText={(confirmPwd) => this.setState({ confirmPwd })}
          />

<DatePicker
            
            style={evoInputDefault}
            date={this.state.date}
            mode="date"
            showIcon={false}
            placeholder="Date of Birth"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />
          <SegmentedControlTab
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            tabTextStyle={styles.tabTextStyle}
            values={["Consumer", "Driver"]}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />

          <Button
            mode="contained"
            dark={true}
            theme={{ colors: { primary: colors.primary } }}
            style={styles.registerBtn}
            onPress={this.handleSignUp}
          >
            Register
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  registerBtn: {
    width: "100%",
    padding: 5,
    marginTop: 30,
  },
  registerTxt: {
    fontSize: 16,
    color: colors.subHeading,
    marginBottom: 10,
  },

  tabStyle: {
    borderColor: colors.primary,
    marginTop: 15,
  },
  activeTabStyle: {
    backgroundColor: colors.primary,
  },
  tabTextStyle: {
    color: colors.darkMode,
  },




});
