import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Contain from '../Components/Contain';
import Container from '../Components/Container';
import CoustomButton from '../Components/CoustomButton';
import Input from '../Components/Input';
import LinkText from '../Components/LinkText';

const SignUp = ({navigation}) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setpPasswordValue] = useState('');
  console.log(emailValue, passwordValue);

  const handleSignUp = () => {
    console.log(
      `Name: ${nameValue}, Email: ${emailValue}, Password: ${passwordValue}`,
    );
    // setNameValue('');
    // setEmailValue('');
    // setpPasswordValue('');
  };

  return (
    <ScrollView style={styles.container}>
      <Container>
        <Contain>
          <Input
            placeholder="Name"
            valueHandle={setNameValue}
            value={nameValue}
          />
        </Contain>
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
          <CoustomButton text="Sign up" handlePress={handleSignUp} />
        </Contain>
        <LinkText
          text="Already have an account?"
          underlineText="Sign In"
          navigation={navigation}
        />
      </Container>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
