import { yupResolver } from "@hookform/resolvers/yup";
import {
    NavigationProp,
    ParamListBase,
    useNavigation
} from "@react-navigation/native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import * as Yup from 'yup';
import uuid from 'react-native-uuid'
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface FormData {
    title: string,
    description: string,
    days: number,
}

function useRegister() {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    function handleGoBack() {
        navigation.goBack()
    }

    function showDatePicker() {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date: any) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    async function handleRegister(form: FormData) {
        if (!selectedDate && !form.days)
            return Alert.alert('Selecione uma data, ou digite dias para o evento')

        const newEvent = {
            id: String(uuid.v4()),
            title: form.title,
            description: form.description,
            days: form.days,
            date: new Date(),
            selectedDate
        }
        try {
            const dataKey = '@countdown:events'
            const data = await AsyncStorage.getItem(dataKey)
            const currentData = data ? JSON.parse(data) : []

            const dataFormatted = [
                ...currentData,
                newEvent
            ]
            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))
            reset()
            setSelectedDate(undefined)
            navigation.navigate('Events')
        } catch (error) {
            Alert.alert('Não foi possivel fazer o registro')
        }
    }

    return {
        handleGoBack,
        control,
        errors,
        showDatePicker,
        handleSubmit,
        handleRegister,
        datePickerVisible,
        handleConfirm,
        hideDatePicker
    }
}

const schema = Yup.object({
    title: Yup.string().required('Titulo é obrigatório'),
    description: Yup.string().required('Descrição é obrigatório'),
    days: Yup.number()
})

export default useRegister