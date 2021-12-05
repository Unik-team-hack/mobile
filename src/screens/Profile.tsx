import { UserResponseDto } from '@/api/dto';
import { Button } from '@/components/Button';
import { ProfileNavProps, PROFILE_ROUTES } from '@/navigation/ProfileScreen/types';
import ProfileStore from '@/store/ProfileStore';
import { useIsFocused } from '@react-navigation/core';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type ProfileScreenProps = ProfileNavProps<PROFILE_ROUTES.PROFILE>

export const ProfileScreen = observer(({navigation,route}:ProfileScreenProps) => {
  const isFocused = useIsFocused()

  const {fetchUser, user} = useContext(ProfileStore)

  useEffect(() => {
    if(isFocused){
      fetchUser()
    }
  }, [fetchUser])

  const renderInfoField = (title:string, value?:string) => 
  <Text style={styles.infoItem}>
    <Text>{`${title}: `}</Text>
    <Text style={styles.accentedText}>{value}</Text>
  </Text>

  const navigateToChangeName = () => navigation.navigate(PROFILE_ROUTES.CHANGE_NAME)
  const navigateToChangePass = () => navigation.navigate(PROFILE_ROUTES.CHANGE_PASS)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
          uri:
          'https://sun7-8.userapi.com/s/v1/ig2/LODkEbuCJT2eRZxvKNDOfv2LXxCupLWEeCZ1Ol8WYP_aIvXr4mKbHUHUkJvmoezBbT5f68KMVgZrP4gMNr6jmnUm.jpg?size=200x200&quality=95&crop=250,871,762,762&ava=1',
        }}
        style={styles.avatar}
        />
        {renderInfoField('Имя', user?.firstName)}
        {renderInfoField('Фамилия',user?.lastName)}
        {renderInfoField('Отчество',user?.patronymic)}
        {renderInfoField('E-mail',user?.email)}
      </View>

      <Button text={'Изменить имя'} onPress={navigateToChangeName}/>
      <Button text={'Поменять пароль'} onPress={navigateToChangePass}/>
      <Button text={'Выход'} style={styles.exitButton} onPress={()=>{}}/>
    </View>
  );
});

const styles = StyleSheet.create({
  container:{
    padding: 16,
    flex:1,
  },
  header:{
    flex:1,
  },
  avatar: {
    alignSelf:'center',
    width: 128,
    height: 128,
    borderRadius: 12,
    marginBottom:16,
  },
  infoItem: {
    fontSize:16,
    marginTop:2,
  },
  accentedText: {
    fontWeight:'bold'
  },
  exitButton: {
    backgroundColor:'gray'
  },
})
