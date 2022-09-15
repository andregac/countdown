import React from 'react';

import { CardEvent, EventCardProps } from '../../components/CardEvent';
import theme from '../../styles/theme';
import { Entypo } from '@expo/vector-icons'
import useEvents from '../../hooks/useEvents/useEvents';

import {
  Container,
  Header,
  Title,
  CardEventWrapper,
  AddButton
} from './styles';

export interface DataListProps extends EventCardProps {
  id: string
  description: string,
  days: number,
  date: string,
  selectedDate: string
}

export function Events() {
  const {
    data,
    handleOpenDetail,
    handleOpenRegister
  } = useEvents()

  return (
    <Container>
      <Header>
        <Title>
          Eventos
        </Title>
      </Header>

      <CardEventWrapper
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CardEvent data={item} onPress={() => handleOpenDetail(item)} />}
        >
      </CardEventWrapper>

      <AddButton>
        <Entypo
          name='circle-with-plus'
          size={50}
          color={theme.colors.secondary}
          onPress={handleOpenRegister}
        />
      </AddButton>
    </Container>
  );
}