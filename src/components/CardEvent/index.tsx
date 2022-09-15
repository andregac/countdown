import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
  SubTitle,
} from './styles';

export interface EventCardProps extends RectButtonProps {
  title: string;
}

interface Props {
  data: EventCardProps;
  onPress?: () => void | undefined;
}

export function CardEvent({
  data,
  onPress
}: Props) {
  return (
    <Container onPress={onPress}>
      <Title>
        {data.title}
      </Title>

      <SubTitle>
        Clique para detalhes
      </SubTitle>
    </Container>
  );
}