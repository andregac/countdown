import { PropsWithChildren } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps extends PropsWithChildren<RectButtonProps>{
    color?:string;
}

export const Container = styled(RectButton)<ButtonProps>`
justify-content: center;
background-color: ${({theme}) => theme.colors.background_secondary};
border-radius: 5px;
padding: 10px;
margin-bottom: 5px;
`;

export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.heading};
font-size: ${RFValue(20)}px;
color:${({theme}) => theme.colors.title};
`;

export const SubTitle = styled.Text`
font-family: ${({theme}) => theme.fonts.heading};
font-size: ${RFValue(10)}px;
color:${({theme}) => theme.colors.text};
`;
