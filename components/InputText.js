import * as React from 'react';
import PropTypes from 'prop-types';
import { Item, Input, Label } from 'native-base';

const propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  title: ''
};

const InputText = ( {
  title,
  name,
  value,
  onChange } ) => {

  const handleChange = ( val ) => {
    onChange( name, val );
  }

  return (
    <Item floatingLabel>
      <Label>{ title }</Label>
      <Input
        onChangeText={ handleChange }
        maxLength={ 20 }
        value={ value } />
    </Item>
  );

}

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export default InputText;