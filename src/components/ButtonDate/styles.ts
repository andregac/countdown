import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface TouchableOpacity {
    color?: string;
}

export const Container = styled.TouchableOpacity<TouchableOpacity>`
justify-content: center;
background-color: ${({ color }) => color};
border-radius: 5px;
padding: 10px;
margin-bottom: 20px;
align-items: center;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.title_button};
font-size: ${RFValue(18)}px;
color:${({ theme }) => theme.colors.background_primary};
`;


