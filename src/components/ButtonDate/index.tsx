import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import {
  Container,
  Title,
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function ButtonDate({
  title,
  color,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container color={color ? color : theme.colors.secondary} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}