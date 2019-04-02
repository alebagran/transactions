import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync( {
      'Roboto': require( 'native-base/Fonts/Roboto.ttf' ),
      'Roboto_medium': require( 'native-base/Fonts/Roboto_medium.ttf' ),
      ...Ionicons.font,
    } );
  }

  render() {
    return (
      <AppContainer>
        <AppHeader title="Transações" />
      </AppContainer>
    );
  }

}