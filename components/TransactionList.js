import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, H3 } from 'native-base';
import TransactionItem from './../components/TransactionItem';

const renderTransaction = ( item ) =>
  <TransactionItem
    key={ item.date }
    isCredit={ item.isCredit }
    description={ item.description }
    amount={ item.amount }
    date={ item.date.format( "DD/MM/YYYY" ) } />
    
const propTypes = {
  title: PropTypes.string.isRequired,
  itemx: PropTypes.array.isRequired,
  emptyPlaceholder: PropTypes.string.isRequired
};
      
const defaultProps = {};

const TransactionList = ( { title, items, emptyPlaceholder } ) => {

  const isItemsEmpty = ( items.length === 0 );

  return(
    <Card style={ styles.card } >
      <CardItem bordered>
        <H3>{ title }</H3>
      </CardItem>
      { isItemsEmpty && <CardItem bordered>
        <Text>{ emptyPlaceholder }</Text>
      </CardItem> }
      { items.map( ( item ) => renderTransaction( item ) ) }
    </Card>
  );

}

const styles = StyleSheet.create( {
  card: {
    marginRight: 8,
    marginLeft: 8,
    marginTop: 2,
    marginBottom: 2
  }
} );

TransactionList.propTypes = propTypes;
TransactionList.defaultProps = defaultProps;

export default TransactionList;