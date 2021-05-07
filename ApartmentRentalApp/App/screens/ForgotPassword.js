import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Alert} from 'react-native';
import Div from '../components/Div';
import NewInput from '../components/NewInput';
import LinkText from '../components/LinkText';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';

const ForgotPassword = ({navigation}) => {
  const [emailValue, setEmailValue] = useState('');
  const [key, setKey] = useState('');
  const [keyFromBackend, setKeyFromBackend] = useState('');
  const [user, setUser] = useState({});
  console.log(user);

  const handleSubmit = async () => {
    await fetch('http://192.168.1.14:8080/forgot-password', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: emailValue}),
    })
      .then(response => response.json())
      .then(async data => {
        if (data.error) {
          Alert.alert('Error', data.error);
        } else if (data.key) {
          setKeyFromBackend(data.key);
          setUser(data.user);
          Alert.alert('Success', 'Go to your mail and copy paste the key.');
        }
      });
  };

  const handleKeySubmit = () => {
    key === keyFromBackend
      ? navigation.navigate('Reset password', {user})
      : Alert.alert('Error', "Key did't Match");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainder}>
        <Text style={styles.headerText}>Forgot password</Text>
      </View>
      <View style={styles.view}>
        <Container>
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
            <CoustomButton text="Submit" handlePress={handleSubmit} />
          </Div>
        </Container>
      </View>
      {keyFromBackend ? (
        <Div mv={10} p={10} bg>
          <NewInput
            label="Key"
            value={key}
            valueHandle={setKey}
            placeholder="Enter key"
            takeNumberFromKeyboard
            iconName="key"
            iconSize={20}
            iconcolor="#ff0000"
            rightIconOn
            rightIconName="paper-plane"
            rightIconSize={24}
            handleRigntIconClick={handleKeySubmit}
          />
        </Div>
      ) : undefined}
      <Div mv={10} mb={50} p={10}>
        <LinkText
          text="Back to sign in"
          navigation={navigation}
          navigateText="Sign in"
        />
      </Div>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
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
