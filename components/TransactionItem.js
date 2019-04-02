import * as React from 'react';
import { CardItem, Text, Body, Left, Right } from 'native-base';
import CurrencyHelper from './../assets/js/CurrencyHelper';
import { PLUS, MINUS } from './../assets/js/consts'

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

export default TransactionItem;