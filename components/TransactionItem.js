import * as React from 'react';
import PropTypes from 'prop-types';
import { CardItem, Text, Body, Left, Right } from 'native-base';
import CurrencyHelper from './../assets/js/CurrencyHelper';
import { PLUS, MINUS } from './../assets/js/consts'

const propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ).isRequired,
  date: PropTypes.string.isRequired,
  isCredit: PropTypes.bool.isRequired
};

const defaultProps = {};

const TransactionItem = ( {
  description,
  amount,
  date,
  isCredit } ) => {

    const currencyColor = isCredit ? 'green' : 'red';
    const prefix =  isCredit ? PLUS : MINUS;
    const formattedAmount = CurrencyHelper.numberToBRL( Number( amount ) );

    return(
      <CardItem>
        <Left>
          <Text>{ description }</Text>
        </Left>
        <Body>
          <Text style={ { color: currencyColor } }>{ prefix } { formattedAmount }</Text>
        </Body>
        <Right>
          <Text>{ date }</Text>
        </Right>
      </CardItem>
    );
}

TransactionItem.propTypes = propTypes;
TransactionItem.defaultProps = defaultProps;

export default TransactionItem;