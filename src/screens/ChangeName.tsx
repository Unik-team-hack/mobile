import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from '@/components/TextInput'
import { Button } from '@/components/Button'

export const ChangeName = () => {
    return (
        <View>
            <Text>{'Имя:'}</Text>
            <TextInput/>
            <Text>{'Фамилия:'}</Text>
            <TextInput/>
            <Text>{'Отчество:'}</Text>
            <TextInput/>
            <Button text={'Подтвердить'} onPress={()=>{}}/>
        </View>
    )
}
