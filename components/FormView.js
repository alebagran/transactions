import * as React from 'react';
import { Card, CardItem, Text } from 'native-base';
import InputPicker from './../components/InputPicker';
import InputText from './../components/InputText';

const FormView = ( { fields, onChange } ) => (
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
  </Card>
);

export default FormView;