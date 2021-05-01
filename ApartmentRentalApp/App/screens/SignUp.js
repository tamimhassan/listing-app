import React, {useState} from 'react';
import {StyleSheet, ScrollView, Alert, View, Text} from 'react-native';
import Contain from '../components/Contain';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';
import NewInput from '../components/NewInput';
import LinkText from '../components/LinkText';

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
    await fetch('http://192.168.1.14:8080/signup', {
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
      <View style={styles.Div}>
        <Container>
          <Contain>
            <NewInput
              label="Name"
              value={nameValue}
              valueHandle={setNameValue}
              iconName="user"
              iconSize={20}
              iconcolor="#ff0000"
            />
          </Contain>
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
          <Contain>
            <CoustomButton text="Sign up" handlePress={handleSignUp} />
          </Contain>
        </Container>
      </View>
      <Contain p={10} bg="white">
        <LinkText
          text="Already have an account?"
          underlineText="Sign In"
          navigation={navigation}
          navigateText="Sign in"
        />
      </Contain>
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
  Div: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
