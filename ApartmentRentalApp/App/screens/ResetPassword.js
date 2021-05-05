import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Alert} from 'react-native';
import Div from '../components/Div';
import NewInput from '../components/NewInput';
import LinkText from '../components/LinkText';
import Container from '../components/Container';
import CoustomButton from '../components/CoustomButton';

const ResetPassword = ({navigation, route}) => {
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  const {user} = route.params;
  console.log(user);

  const handleConfirm = async () => {
    if (newPassword1 === newPassword2) {
      const sendData = {
        email: user.email,
        salt: user.salt,
        password: newPassword2,
      };

      // console.log(sendData);
      await fetch('http://192.168.1.14:8080/reset-password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      })
        .then(response => response.json())
        .then(async data => {
          if (data.error) {
            Alert.alert('Error', data.error);
          } else {
            Alert.alert('Success', data.message);
            // navigation.navigate('Sign in');
          }
        });
    } else {
      Alert.alert('Error', "Password doesn't match!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainder}>
        <Text style={styles.headerText}>Reset password</Text>
      </View>
      <View style={styles.view}>
        <Container>
          <Div mv={10}>
            <NewInput
              label="New Password"
              value={newPassword1}
              valueHandle={setNewPassword1}
              iconName="lock"
              iconSize={20}
              iconcolor="#ff0000"
              password
            />
          </Div>
          <Div mv={10}>
            <NewInput
              label="Confirm New Password"
              value={newPassword2}
              valueHandle={setNewPassword2}
              iconName="lock"
              iconSize={20}
              iconcolor="#ff0000"
              password
            />
          </Div>

          <Div mv={10}>
            <CoustomButton text="Confirm" handlePress={handleConfirm} />
          </Div>
        </Container>
      </View>

      <Div mv={10} mb={50} p={10} bg>
        <LinkText
          text="Back to sign in"
          navigation={navigation}
          navigateText="Sign in"
        />
      </Div>
    </ScrollView>
  );
};

export default ResetPassword;

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
