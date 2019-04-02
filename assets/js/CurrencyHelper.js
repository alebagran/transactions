import { EMPTY_STRING, PLUS, MINUS } from './consts.js';

class CurrencyHelper {

  static numberToBRL( num ) {
    return "R$ " + num
      .toFixed( 2 )
      .replace( '.', ',' )
      .replace( /(\d)(?=(\d{3})+\,)/g, "$1." )
      ;
  }

  static BRLToNumber( str ) {
    return isNaN( str ) == false
    ? parseFloat( str )
    : parseFloat(
      str
        .replace( "R$","" )
        .replace( ".","" )
        .replace( ",","." ) 
      );
  }

  static getSignalPrefix( value ) {

    const isValueZero = ( value === 0 );
    if( isValueZero ) {
      return EMPTY_STRING;
    }

    const isValuePositive = ( value > 0 );
    if( isValuePositive ) {
      return PLUS;
    }

    return MINUS;

  }

}

export default CurrencyHelper;