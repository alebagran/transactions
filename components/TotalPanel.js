import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Card, CardItem, H1, H3 } from 'native-base';
import CurrencyHelper from '../assets/js/CurrencyHelper';

const propTypes = {
  total: PropTypes.number.isRequired
};

const defaultProps = {
  total: ''
};

const TotalPanel = ( { total } ) => {

  const isTotalZero = ( total === 0 );
  const isTotalPositive = ( total > 0 );

  const totalStyle = { ...styles.total };

  if( !isTotalZero ) {
    totalStyle.color = isTotalPositive ? 'green' : 'red';
  }

  const prefix = CurrencyHelper.getSignalPrefix( total );
  const totalModule = Math.abs( total );
  const formattedTotal = CurrencyHelper.numberToBRL( totalModule );

  return (
    <Card style={ styles.card } >
      <CardItem bordered>
        <H1>Total</H1>
      </CardItem>
      <CardItem bordered>
        <H3 style={ totalStyle }>{ prefix } { formattedTotal }</H3>
      </CardItem>
      <CardItem bordered>
      </CardItem>
    </Card>
  );

}

const styles = StyleSheet.create( {
  card: {
    marginRight: 8,
    marginLeft: 8,
    marginTop: 14,
    marginBottom: 12
  },
  total: {
    color: 'black'
  }
} );

TotalPanel.propTypes = propTypes;
TotalPanel.defaultProps = defaultProps;

export default TotalPanel;