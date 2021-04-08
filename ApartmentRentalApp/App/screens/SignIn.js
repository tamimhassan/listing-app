import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Contain from '../components/Contain';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';
import HorigantalRow from '../components/HorigantalRow';
import Input from '../components/Input';
import LinkText from '../components/LinkText';

const SignIn = ({navigation}) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setpPasswordValue] = useState('');
  console.log(emailValue, passwordValue);

  const handleSignin = () => {
    console.log(`Email: ${emailValue}, Password: ${passwordValue}`);
    setEmailValue('');
    setpPasswordValue('');
  };

  return (
    <ScrollView style={styles.container}>
      <Container>
        <Contain>
          <Input
            placeholder="Email"
            valueHandle={setEmailValue}
            value={emailValue}
          />
        </Contain>
        <Contain>
          <Input
            placeholder="Password"
            value={passwordValue}
            valueHandle={setpPasswordValue}
          />
        </Contain>
        <Contain>
          <CoustomButton text="Sign in" handlePress={handleSignin} />
        </Contain>
        <LinkText
          text="Forgot password?"
          navigation={navigation}
          navigateText="Forgot password"
        />
      </Container>

      <HorigantalRow />
      <Container>
        <Contain>
          <CoustomButton
            text="Create an account"
            navigation={navigation}
            navigateText="Sign up"
          />
        </Contain>
      </Container>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
