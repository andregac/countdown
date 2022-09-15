import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';

import { DataListProps } from '../../screens/Events';

function useEvents() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [data, setData] = useState<DataListProps[]>([])

    async function loadEvents() {
        const dataKey = '@countdown:events'
        const response = await AsyncStorage.getItem(dataKey)
        const event = response ? JSON.parse(response) : []
        const eventFormatted: DataListProps[] = event
            .map((item: DataListProps) => {
                return {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    days: item.days,
                    date: item.date,
                    selectedDate: item.selectedDate
                }
            })
        setData(eventFormatted)
    }

    useEffect(() => {
        loadEvents()
    }, [])

    useFocusEffect(useCallback(() => {
        loadEvents()
    }, []))

    function handleOpenRegister() {
        navigation.navigate('RegisterEvent')
    }

    function handleOpenDetail(item: DataListProps) {
        navigation.navigate('EventDetails', { item })
    }

    return {
        data,
        handleOpenDetail,
        handleOpenRegister
    }
}

export default useEvents