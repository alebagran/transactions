import { EMPTY_STRING, PLUS, MINUS } from './consts.js';

class CurrencyHelper {

  static numberToBRL( num ) {
    return "R$ " + num
      .toFixed( 2 )
      .replace( '.', ',' )
      .replace( /(\d)(?=(\d{3})+\,)/g, "$1." )
      ;
  }

}

export default CurrencyHelper;