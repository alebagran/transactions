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
import { TRANSACTION_TYPES, EMPTY_STRING, DOT } from './assets/js/consts';
import moment from './assets/js/moment';
import TransactionList from './components/TransactionList';
import TotalPanel from './components/TotalPanel';

export default class App extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      shouldOpenForm: false,
      fields: {
        type: TRANSACTION_TYPES.DEBIT,
        description: EMPTY_STRING,
        amount: EMPTY_STRING
      },
      transactions: []
    };

    this.handleCloseForm = this.handleCloseForm.bind( this );
    this.handleOpenForm = this.handleOpenForm.bind( this );
    this.handleChange = this.handleChange.bind( this );
    this.saveTransaction = this.saveTransaction.bind( this );
    this.shouldDisableSave = this.shouldDisableSave.bind( this );
    this.calculateTotal = this.calculateTotal.bind( this );

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
          type: { $set: TRANSACTION_TYPES.DEBIT },
          description: { $set: EMPTY_STRING },
          amount: { $set: EMPTY_STRING }
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

  saveTransaction() {

    const {
      description,
      amount,
      type
      } = this.state.fields;

    const amountStr = amount.toString();
    const lastChar = amountStr.substring( amountStr.length - 1 );
    const isLastCharDot = ( lastChar === DOT );
    let sanitizedAmount = amount;

    if( isLastCharDot ) {
      sanitizedAmount = Number( amountStr.slice( 0, -1 ) );
    }

    const newTransaction = {
      description: description,
      amount: sanitizedAmount,
      date: moment(),
      isCredit: ( type === TRANSACTION_TYPES.CREDIT )
    };

    this.setState( ( state ) => update(
      state, { transactions: { $push: [ newTransaction ] } }
    ), () => this.handleCloseForm() );

  }

  shouldDisableSave() {

    const { description, amount } = this.state.fields;

    const isDescriptionEmpty = ( description === EMPTY_STRING );
    const isAmountEmpty = ( amount === EMPTY_STRING );

    const isAnyFieldEmpty = ( isDescriptionEmpty || isAmountEmpty );

    if( isAnyFieldEmpty ) {
      return true;
    }

    return false;

  }

  calculateTotal() {
    const { transactions } = this.state;
    const sum = 0;
    const total =  transactions.reduce( ( sum, b ) => {
        const amountB = parseFloat( b.amount );
        const sumVal = parseFloat( sum );
        const newVal = b.isCredit ? amountB : -amountB;
        return ( sumVal + newVal ).toFixed( 2 );
    }, sum );
    return parseFloat( total );
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
            <FormView
              fields={ this.state.fields }
              onChange={ this.handleChange }
              onSubmit={ this.saveTransaction }
              shouldDisableSave={ this.shouldDisableSave() } />
          </Modal>
          <TotalPanel total={ this.calculateTotal() } />
          <TransactionList
            title="Minhas Transações"
            emptyPlaceholder="Não há transações salvas"
            items={ this.state.transactions } />
        </AppContent>
        <PlusFAB onPress={ this.handleOpenForm } />
      </AppContainer>
    );
  }

}