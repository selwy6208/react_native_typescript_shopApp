import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {
  //Item,
  Input,
} from 'native-base';

const SignInScreen: FC = () => {
  const navigation: any = useNavigation();

  const signIn = () => {
    navigation.navigate('Home');
  };
    return (
			<SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.itemStyle}>
            <Input
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#adb4bc"
              keyboardType={'email-address'}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              // onSubmitEditing={(event) => {event.refs.SecondInput._root.focus();}}
              // onChangeText={(value: any) => onChangeText('username', value)}
            />
          </View>
          <View style={styles.itemStyle}>
            <Input
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#adb4bc"
              returnKeyType="go"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              // ref="SecondInput"
              // onChangeText={value => onChangeText('password', value)}
            />
          </View>
          <TouchableOpacity
            onPress={() => signIn()}
            style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
			</SafeAreaView>
		);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5059ae',
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemStyle: {
    marginRight: 6,
    marginLeft: 6,
    marginBottom: 20,
  },
  iconStyle: {
    color: '#fff',
    fontSize: 30,
    marginRight: 15,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#b44666',
    padding: 14,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 20,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default SignInScreen;
