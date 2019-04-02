import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

export default class App extends React.Component {

  constructor( props ) {
    
    super( props );

    this.state = {
      shouldOpenModal: true
    };

    this.handleCloseModal = this.handleCloseModal.bind( this );

  }

  async componentDidMount() {
    await Font.loadAsync( {
      'Roboto': require( 'native-base/Fonts/Roboto.ttf' ),
      'Roboto_medium': require( 'native-base/Fonts/Roboto_medium.ttf' ),
      ...Ionicons.font,
    } );
  }

  handleCloseModal() {
    this.setState( { shouldOpenModal: false } );
  }

  render() {
    return (
      <AppContainer>
        <AppHeader title="Transações" />
        <AppContent>
          <Modal
            avoidKeyboard={ true }
            isVisible={ this.state.shouldOpenModal }
            onBackButtonPress={ this.handleCloseModal }
            onBackdropPress={ this.handleCloseModal } >
          </Modal>
        </AppContent>
      </AppContainer>
    );
  }

}