import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';

const propTypes = {
  title: PropTypes.string
};

const defaultProps = {
  title: ''
};

const AppHeader = ( { title } ) => (
 <Header style={ styles.header }>
    <Left />
    <Body>
      <Title style={ styles.title }>{ title }</Title>
    </Body>
    <Right />
  </Header>
);

AppHeader.propTypes = propTypes;
AppHeader.defaultProps = defaultProps;

const styles = StyleSheet.create( {
  header: {
    backgroundColor: '#ecf0f1'
  },
  title: {
    color: 'gray'
  }
} );

export default AppHeader;