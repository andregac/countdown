import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
width:100%;
background-color: ${({theme}) => theme.colors.background_primary};

`;

export const Header = styled.View`
  width: 100%;
  height:120px;
  background-color:${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-bottom:40px;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.heading};
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.background_secondary};
`;

export const WrapperDetail = styled.View`
  width: 100%;
  
  background-color:${({theme}) => theme.colors.background_secondary};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-bottom:24px;
  padding:12px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title_button};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.title};
  text-align: center;
`;
export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.filter};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
`;
export const Countdown = styled.Text`
  font-family: ${({theme}) => theme.fonts.filter};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
`;

export const Footer = styled.View`
padding: 24px;

`;