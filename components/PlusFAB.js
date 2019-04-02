import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const propTypes = {
  onPress: PropTypes.func.isRequired
};

const defaultProps = {};

const PlusFAB = ( { onPress } ) => (
  <FAB
    style={ styles.fab }
    small={ false }
    icon="add"
    onPress={ onPress } />
);

const styles = StyleSheet.create( {
  fab: {
    backgroundColor: '#4099ff',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
} );

PlusFAB.propTypes = propTypes;
PlusFAB.defaultProps = defaultProps;

export default PlusFAB;