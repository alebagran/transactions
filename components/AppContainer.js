import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { Constants } from 'expo';

const AppContainer = ( { children } ) => (
  <Container style={ styles.container } >
    { children }
  </Container>
);

const styles = StyleSheet.create( {
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  }
} );

export default AppContainer;