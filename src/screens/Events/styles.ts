import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps, ScrollView } from 'react-native';
import { DataListProps } from '.';

export const Container = styled.View`
  flex: 1;
  
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height:120px;
  background-color:${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.heading};
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.background_secondary};
`;
export const CardEventWrapper = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24}
})`
`;

export const AddButton = styled(RectButton)`
width: 50px;
height: 50px;

border-radius: 25px;

position: absolute;
bottom:20px;
right: 20px;

`;