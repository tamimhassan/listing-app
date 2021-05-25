import React, {useState} from 'react';
import {StyleSheet, ScrollView, Alert, View, Text} from 'react-native';
import Div from '../components/Div';
import NewInput from '../components/NewInput';
import LinkText from '../components/LinkText';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';

import {BASE_URL} from '../enviro';

const SignUp = ({navigation}) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setpPasswordValue] = useState('');

  const handleSignUp = async () => {
    const user = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };
    await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        data.error
          ? Alert.alert('Error', data.error)
          : Alert.alert('Message', 'Successfully created account.', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Sign in'),
              },
            ]);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainder}>
        <Text style={styles.headerText}>Create account</Text>
      </View>
      <View style={styles.view}>
        <Container>
          <Div mv={10}>
            <NewInput
              label="Name"
              value={nameValue}
              valueHandle={setNameValue}
              iconName="user"
              iconSize={20}
              iconcolor="#ff0000"
            />
          </Div>
          <Div mv={10}>
            <NewInput
              label="Email"
              value={emailValue}
              valueHandle={setEmailValue}
              iconName="envelope"
              iconSize={20}
              iconcolor="#ff0000"
            />
          </Div>
          <Div mv={10}>
            <NewInput
              label="Password"
              value={passwordValue}
              valueHandle={setpPasswordValue}
              iconName="lock"
              iconSize={20}
              iconcolor="#ff0000"
              password
            />
          </Div>
          <Div mv={10}>
            <CoustomButton text="Sign up" handlePress={handleSignUp} />
          </Div>
        </Container>
      </View>
      <Div mv={10} mb={50} p={10}>
        <LinkText
          text="Already have an account?"
          underlineText="Sign In"
          navigation={navigation}
          navigateText="Sign in"
        />
      </Div>
    </ScrollView>
  );
};

export default SignUp;

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
  view: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
