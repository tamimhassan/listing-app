import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Contain from '../components/Contain';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';
import Input from '../components/Input';

const ForgotPassword = ({navigation}) => {
  const [emailValue, setEmailValue] = useState('');
  console.log(emailValue);

  const handleSubmit = () => {
    console.log(`Email: ${emailValue}`);
    setEmailValue('');
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
          <CoustomButton text="Submit" handlePress={handleSubmit} />
        </Contain>
      </Container>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
