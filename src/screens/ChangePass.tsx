import { Button } from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ChangePassProps {
    
}

export const ChangePass = () => {
    return (
        <View>
            <Text>{'Новый пароль'}</Text>
            <TextInput/>
            <Button text={'Подтвердить'} onPress={()=>{}}/>
        </View>
    )
}
