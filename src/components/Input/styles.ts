import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
    width: 100%;
    padding: 16px 18px;

    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.heading} ;
    
    color: ${({theme}) => theme.colors.title};
    background-color: ${({theme}) => theme.colors.background_primary};
    border-radius: 5px;

    margin-bottom: 8px;
`;