import { View, Text } from 'react-native'
import React from 'react'
import { getHeaderTitle } from '@react-navigation/elements'
import { Appbar } from 'react-native-paper';

export default function MainAppbar({ options, route, backgroundColor, back, color, navigation }) {
    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header style={{ backgroundColor: backgroundColor }} mode='center-aligned'>
            {back ? <Appbar.BackAction color={color} onPress={() => navigation.goBack()} /> : null}
            <Appbar.Content title={title} color={color} />
            {back ? null : <Appbar.Action icon='cog' color={color} onPress={() => navigation.navigate('Settings')} />}
        </Appbar.Header>
    )
}