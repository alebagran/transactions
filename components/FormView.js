import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Button, Left, Body, Right, Text } from 'native-base';
import InputPicker from './../components/InputPicker';
import InputText from './../components/InputText';
import InputCurrency from './../components/InputCurrency';

const propTypes = {
  fields: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  shouldDisableSave: PropTypes.bool.isRequired
};

const defaultProps = {};

const FormView = ( {
  fields,
  onChange,
  onSubmit,
  shouldDisableSave } ) => (
  <Card>
    <CardItem bordered >
      <Text>Nova Transação</Text>
    </CardItem>
    <CardItem>
      <InputPicker
        name="type"
        value={ fields.type }
        onChange={ onChange } />
    </CardItem>
    <CardItem>
      <InputText
        title="Descrição"
        name="description"
        value={ fields.description }
        onChange={ onChange } />
    </CardItem>
    <CardItem style={ { marginBottom: 45 } }>
      <InputCurrency
        title="Quantia"
        name="amount"
        value={ fields.amount }
        onChange={ onChange } />
    </CardItem>
    <CardItem footer bordered >
      <Left />
      <Body>
      <Button
          style={ { backgroundColor: shouldDisableSave ? 'lightgray' : '#4099ff' } } 
          onPress={ onSubmit }
          disabled={ shouldDisableSave } >
          <Text>Salvar</Text>
        </Button>
      </Body>
      <Right />
    </CardItem>
  </Card>
);

FormView.propTypes = propTypes;
FormView.defaultProps = defaultProps;

export default FormView;