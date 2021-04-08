import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Contain from '../Components/Contain';
import Container from '../Components/Container';
import CoustomButton from '../Components/CoustomButton';
import HorigantalRow from '../Components/HorigantalRow';
import Input from '../Components/Input';
import LinkText from '../Components/LinkText';

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
        <LinkText text="Forgot password?" />
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
