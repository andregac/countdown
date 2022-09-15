import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { ButtonDate } from '../../components/ButtonDate';
import { DataListProps } from '../Events';
import useEventDetails from '../../hooks/useEventDetails/useEventDetails';

import {
  Container,
  Header,
  TitleHeader,
  WrapperDetail,
  Title,
  Description,
  Countdown,
  Footer

} from './styles';

interface Params {
  item: DataListProps
}

export function EventDetails() {
  const route = useRoute()
  const { item } = route.params as Params
  const theme = useTheme()
  
  const {
    diferentDate,
    diferentDay,
    handleCloseDetails,
    Delete
  } = useEventDetails(item)

  return (
    <Container>
      <Header>
        <TitleHeader>Detalhes do evento</TitleHeader>
      </Header>

      <Footer>
        <WrapperDetail>
          <Title>Titulo {'\n'}{item.title} {'\n'}</Title>
          <Description>Descrição{'\n'}{item.description} {'\n'}</Description>
          {item.selectedDate ?
            <Countdown>Faltam {diferentDate} dias para o evento</Countdown>
            :
            <Countdown>Faltam {diferentDay} dias para o evento</Countdown>}
        </WrapperDetail>

        <ButtonDate onPress={handleCloseDetails} color={theme.colors.primary} title='Ok' />
        <ButtonDate onPress={() => Delete(item.id)} color={theme.colors.secondary} title='Deletar Evento' />
      </Footer>
    </Container>

  );
}