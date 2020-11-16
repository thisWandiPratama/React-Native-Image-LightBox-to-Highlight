//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
          {this.props.header}
        </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#7834',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

//make this component available to the app
export default Header;
