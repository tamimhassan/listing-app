import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconText from '../components/IconText';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.userInfo}>
        <View style={styles.image}>
          <Icon name="user" size={200} color="gray" />
        </View>
        <Text style={[styles.text, styles.nameText]}>Mohammad Tamim</Text>
        <Text style={styles.text}>tamimhassan506@gamil.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconText
          iconName="user-edit"
          iconSize={26}
          text="Edit your profile"
          iconcolor="#a17daa"
          onPress={() => {}}
        />
        <IconText
          iconName="house-user"
          iconSize={26}
          text="Add a new apaetmentle"
          iconcolor="#a17daa"
          onPress={() => navigation.navigate('CreateApartment')}
        />
        <IconText
          iconName="cogs"
          iconSize={26}
          text="Settings"
          iconcolor="#a17daa"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  userInfo: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#dadbdc',
    paddingBottom: 10,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  nameText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingVertical: 10,
  },
});
