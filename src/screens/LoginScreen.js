import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image , TouchableHighlight} from "react-native";
import * as firebase from "firebase";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.TextInput}>
          
          {this.state.errorMessage && (
            <Text style={{ color: "red", position: "absolute", top: 275, left: 45, right: 5, fontSize: 16}}>{this.state.errorMessage}</Text>
          )}
          <Image
            style={styles.img}
            source={require("../../assets/Logo.png")}
          ></Image>
          <Text
            style={{ position: "absolute", top: 325, left: 45, fontSize: 16 }}
          >
            E-Mail Address{" "}
          </Text>
          <TextInput
            style={styles.inputUsername}
            autoCapitalize="none"
            placeholder="Insert your E-mail"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
          <Text
            style={{ position: "absolute", top: 425, left: 45, fontSize: 16 }}
          >
            Password{" "}
          </Text>
          <TextInput
            secureTextEntry
            style={styles.inputPassword}
            autoCapitalize="none"
            placeholder="Insert your password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          
        </View>
        <TouchableHighlight
          style={styles.loginButton}
          onPress={this.handleLogin}
        >
          <Text
            style={{ position: "absolute", left: 110, top: 10, fontSize: 20 }}
          >
            Login
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    position: "absolute",
    top: 40,
    left: 12,
    height: 240,
    width: "100%",
  },
  loginButton: {
    position: "absolute",
    top: 580,
    left: 60,
    width: "70%",
    height: 50,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "green",
  },
  TextInput: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 800,
    backgroundColor: "white",
  },
  inputUsername: {
    position: "absolute",
    top: 350,
    left: 45,
    padding: 10,
    width: 320,
    borderWidth: 1,
    borderColor: "#777",
  },
  inputPassword: {
    position: "absolute",
    top: 450,
    left: 45,
    padding: 10,
    width: 320,
    borderWidth: 1,
    borderColor: "#777",
  },
});
