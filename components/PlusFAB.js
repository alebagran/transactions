import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

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
} )

export default PlusFAB;