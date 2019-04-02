import * as React from 'react';
import PropTypes from 'prop-types';
import { Item, Input, Label } from 'native-base';

const propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ).isRequired,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  title: ''
};

class InputCurrency extends React.Component {

  constructor( props ) {
    super( props );
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( val ) {

    const isValEmptyStr = ( val === '' );
    const onlyNumberWithOneCommaRegex = /^[0-9]{1,8}([,])?([0-9]{1,2})?$/;

    if ( isValEmptyStr || onlyNumberWithOneCommaRegex.test( val ) ) {
      const sanitizedVal = val.replace( ',', '.' );
      this.props.onChange( this.props.name, sanitizedVal );
    }

  }

  render() {

    const { value } = this.props;
    const formattedValue = value.toString().replace( '.', ',' );

    return (
      <Item floatingLabel>
        <Label>{ this.props.title }</Label>
        <Input
          keyboardType='numeric'
          maxLength={ 10 }
          onChangeText={ this.handleChange }
          value={ formattedValue } />
      </Item>
    );
  }

}

InputCurrency.propTypes = propTypes;
InputCurrency.defaultProps = defaultProps;

export default InputCurrency;