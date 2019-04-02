import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import update from 'immutability-helper';
import Modal from "react-native-modal";
import AppContainer from './components/AppContainer';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import PlusFAB from './components/PlusFAB';
import FormView from './components/FormView';
import { TRANSACTION_TYPES, EMPTY_STRING } from './assets/js/consts';

export default class App extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      shouldOpenModal: false,
      fields: {
        type: TRANSACTION_TYPES.DEBIT,
        description: EMPTY_STRING,
      }
    };

    this.handleCloseModal = this.handleCloseModal.bind( this );
    this.handleOpenModal = this.handleOpenModal.bind( this );
    this.handleChange = this.handleChange.bind( this );

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

  handleOpenModal() {
    this.setState( { shouldOpenModal: true } );
  }

  handleChange( field, value ) {
    this.setState( ( state ) => update(
      state, { fields: { [ field ]: { $set: value } } }
    ) );
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
            <FormView fields={ this.state.fields } onChange={ this.handleChange } />
          </Modal>
        </AppContent>
        <PlusFAB onPress={ this.handleOpenModal } />
      </AppContainer>
    );
  }

}