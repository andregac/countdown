import styled from 'styled-components/native';
import {  getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`

`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: ${getStatusBarHeight()+20}px;
  margin-left: 24px;

`;

export const ContainerTitle = styled.View`
  margin-left: 24px;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.heading};
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Form = styled.View`
  padding: 24px;
`;

export const Text = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.body};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.title};
`;

