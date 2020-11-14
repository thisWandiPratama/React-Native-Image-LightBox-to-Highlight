import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      state: 0,
    };
  }

  changeState = () => {
    this.setState ({
      state: this.state.state + 1,
    });
  };

  componentDidMount () {
    GoogleSignin.configure ({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '946795904366-rjvuanai82kc5n7ul2ga17mto7fg8geb.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices ();
      const userInfo = await GoogleSignin.signIn ();
      console.log (userInfo);
    } catch (error) {
      console.log ({error});
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Login </Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2: {
    color: '#fff',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#870189',
    height: 40,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default App;
