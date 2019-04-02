import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Picker, Item } from 'native-base';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {};

const InputPicker = ( { name, value, onChange } ) => {

  const handleChange = ( val ) => {
    onChange( name, val );
  }

  return (
    <Item picker>
      <Picker
        mode="dropdown"
        style={ { width: undefined } }
        placeholder="Selecione o tipo"
        placeholderStyle={ { color: "#bfc6ea" } }
        placeholderIconColor="#007aff"
        selectedValue={ value }
        onValueChange={ handleChange } >
        <Picker.Item label="Débito" value={ 1 } />
        <Picker.Item label="Crédito" value={ 2 } />
      </Picker>
    </Item>
  );

}

InputPicker.propTypes = propTypes;
InputPicker.defaultProps = defaultProps;

export default InputPicker;