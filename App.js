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
      shouldOpenForm: false,
      fields: {
        type: TRANSACTION_TYPES.DEBIT,
        description: EMPTY_STRING,
        amount: EMPTY_STRING
      }
    };

    this.handleCloseForm = this.handleCloseForm.bind( this );
    this.handleOpenForm = this.handleOpenForm.bind( this );
    this.handleChange = this.handleChange.bind( this );

  }

  async componentDidMount() {
    await Font.loadAsync( {
      'Roboto': require( 'native-base/Fonts/Roboto.ttf' ),
      'Roboto_medium': require( 'native-base/Fonts/Roboto_medium.ttf' ),
      ...Ionicons.font,
    } );
  }

  handleCloseForm() {
    this.setState( ( state ) => update(
      state, {
        shouldOpenForm: { $set: false },
        fields: {
          description: { $set: EMPTY_STRING },
          amount: { $set: EMPTY_STRING },
          type: { $set: TRANSACTION_TYPES.DEBIT }
      } }
    ) );
  }

  handleOpenForm() {
    this.setState( { shouldOpenForm: true } );
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
            isVisible={ this.state.shouldOpenForm }
            onBackButtonPress={ this.handleCloseForm }
            onBackdropPress={ this.handleCloseForm } >
            <FormView fields={ this.state.fields } onChange={ this.handleChange } />
          </Modal>
        </AppContent>
        <PlusFAB onPress={ this.handleOpenForm } />
      </AppContainer>
    );
  }

}