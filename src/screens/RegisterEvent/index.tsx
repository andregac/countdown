import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { BackButton } from '../../components/BackButton';
import { ButtonDate } from '../../components/ButtonDate';
import { InputForm } from '../../components/InputForm';
import theme from '../../styles/theme';
import useRegister from '../../hooks/useRegister';

import {
  Container,
  Header,
  Title,
  ContainerTitle,
  Form,
  Text
} from './styles';

export function RegisterEvent() {
  const {
    handleGoBack,
    control,
    errors,
    showDatePicker,
    handleSubmit,
    handleRegister,
    datePickerVisible,
    handleConfirm,
    hideDatePicker
  } = useRegister()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <BackButton
            onPress={handleGoBack}
          />
        </Header>

        <ContainerTitle>
          <Title>
            Preencha os campos{'\n'}para cadastrar um{'\n'}novo evento
          </Title>
        </ContainerTitle>

        <Form>
          <InputForm
            name="title"
            control={control}
            placeholder="Titulo"
            autoCapitalize='sentences'
            autoCorrect={false}
            error={errors.title && errors.title.message}
          />
          <InputForm
            name="description"
            control={control}
            placeholder="Descrição"
            autoCapitalize='sentences'
            autoCorrect={false}
            error={errors.description && errors.description.message}
          />
          <InputForm
            name="days"
            control={control}
            placeholder="Dias para o evento. Ex: 4"
            keyboardType='number-pad'
            error=''
          />

          <Text>
            Ou
          </Text>
          <ButtonDate color={theme.colors.primary} title="Selecione uma data" onPress={showDatePicker} />
          <ButtonDate color={theme.colors.secondary} title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <DateTimePickerModal
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={new Date()}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}