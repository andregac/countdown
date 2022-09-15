import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { RegisterEvent } from '../screens/RegisterEvent';
import { Events } from "../screens/Events";
import { EventDetails } from "../screens/EventDetails";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Events">
            <Screen
                name="Events"
                component={Events}
            />
            <Screen
                name="RegisterEvent"
                component={RegisterEvent}
            />
            <Screen
                name="EventDetails"
                component={EventDetails}
            />
        </Navigator>
    )
}