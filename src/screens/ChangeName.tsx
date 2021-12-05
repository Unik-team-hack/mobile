import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from '@/components/TextInput'
import { Button } from '@/components/Button'
import ProfileStore from '@/store/ProfileStore'
import { ProfileNavProps, PROFILE_ROUTES } from '@/navigation/ProfileScreen/types'

type ChangeNameProps = ProfileNavProps<PROFILE_ROUTES.CHANGE_NAME>

export const ChangeName = ({navigation}:ChangeNameProps) => {
    const {user, updateInfo} = useContext(ProfileStore)

    const [firstName, setFirstName] = useState(user?.firstName)
    const [lastName, setLastName] = useState(user?.lastName)
    const [patronymic, setPatronymic] = useState(user?.patronymic)

    const onSubmit = async () =>{
        await updateInfo(firstName!, lastName!, patronymic!)
        navigation.goBack()
    }

    return (
        <View>
            <Text>{'Имя:'}</Text>
            <TextInput value={firstName} onChangeText={setFirstName}/>
            <Text>{'Фамилия:'}</Text>
            <TextInput value={lastName} onChangeText={setLastName}/>
            <Text>{'Отчество:'}</Text>
            <TextInput value={patronymic} onChangeText={setPatronymic}/>
            <Button text={'Подтвердить'} onPress={onSubmit}/>
        </View>
    )
}
