import { useEffect, useState } from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Alert } from 'react-native';
import { DataListProps } from '../../screens/Events';

function generalHooks(item: DataListProps) {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const selectDate = new Date(item.selectedDate)
    const days = item.days
    const date = new Date()
    const select = moment(selectDate, "DD/MM/YYYY").diff(moment(date, "DD/MM/YYYY "))
    const differentDays = moment.duration(select).days()

    const [differentDate, setDiferentDate] = useState(differentDays)
    const [differentDay, setDiferentDay] = useState(days)

    useEffect(() => {
        if (differentDate === 0) {
            Alert.alert('Hoje é o dia do evento' + item.title)
            return;
        }
        setTimeout(() => {
            setDiferentDate(state => state - 1)
        }, 864000)
    }, [differentDate])

    useEffect(() => {
        if (differentDay === 0) {
            Alert.alert('Hoje é o dia do evento' + item.title)
            return;
        }
        setTimeout(() => {
            setDiferentDay(state => state - 1)

        }, 864000)
    }, [differentDay])

    function handleCloseDetails() {
        navigation.navigate('Events')
    }

    const { getItem, setItem } = useAsyncStorage("@countdown:events")
    async function Delete(id: string) {
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : []
        const data = previousData.filter((item: DataListProps) => item.id !== id)
        setItem(JSON.stringify(data))
        navigation.navigate('Events')
    }

    return {
        diferentDate: differentDate,
        diferentDay: differentDay,
        handleCloseDetails,
        Delete,
    }
}

export default generalHooks