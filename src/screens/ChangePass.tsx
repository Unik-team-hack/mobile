import { Button } from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import { ProfileNavProps, PROFILE_ROUTES } from '@/navigation/ProfileScreen/types'
import ProfileStore from '@/store/ProfileStore'
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ChangePassProps = ProfileNavProps<PROFILE_ROUTES.CHANGE_PASS>

export const ChangePass = ({navigation}:ChangePassProps) => {
    const {updatePass} = useContext(ProfileStore)

    const [newPassword, setNewPassword] = useState('')

    const onSubmit = async () => {
        await updatePass(newPassword)
        navigation.goBack()
    }
    
    return (
        <View>
            <Text>{'Новый пароль'}</Text>
            <TextInput secureTextEntry={true}/>
            <Button text={'Подтвердить'} onPress={onSubmit}/>
        </View>
    )
}
