import React, {useState} from 'react';
import {StyleSheet, ScrollView, Alert, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import Contain from '../components/Contain';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';
import LinkText from '../components/LinkText';
import NewInput from '../components/NewInput';

const SignIn = ({navigation}) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setpPasswordValue] = useState('');
  console.log(passwordValue);
  const handleSignin = async () => {
    const user = {
      email: emailValue,
      password: passwordValue,
    };
    await fetch('http://192.168.1.14:8080/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(async data => {
        if (data.error) {
          Alert.alert('Error', data.error);
        }
        try {
          await AsyncStorage.setItem('token', data.token);
          RNRestart.Restart();
        } catch (e) {
          console.log('error: ', e);
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainder}>
        <Text style={styles.headerText}>Sign In</Text>
      </View>
      <View style={styles.Div}>
        <Container>
          <Contain>
            <NewInput
              label="Email"
              value={emailValue}
              valueHandle={setEmailValue}
              iconName="envelope"
              iconSize={20}
              iconcolor="#ff0000"
            />
          </Contain>
          <Contain>
            <NewInput
              label="Password"
              value={passwordValue}
              valueHandle={setpPasswordValue}
              iconName="lock"
              iconSize={20}
              iconcolor="#ff0000"
              password
            />
          </Contain>
          <LinkText
            text="Forgot password?"
            navigation={navigation}
            navigateText="Forgot password"
            float="right"
          />
          <Contain>
            <CoustomButton text="Sign in" handlePress={handleSignin} />
          </Contain>
        </Container>
      </View>
      <Contain p={10} bg="white">
        <LinkText
          text="You have no account?"
          underlineText="Sign Up"
          navigation={navigation}
          navigateText="Sign up"
        />
      </Contain>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    backgroundColor: 'orange',
  },
  headerContainder: {
    margin: 15,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 22,
    color: 'white',
  },
  Div: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
