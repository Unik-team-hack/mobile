import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {TextInput} from '@/components/TextInput';
import {Button} from '@/components/Button';
import AuthStore from '@/store/AuthStore';
import {startScreensStyles as styles} from './StartScreens.styles';
import {GREETING_ROUTES} from '@/navigation/GreetingNavigator';

export const SignInScreen = observer(({navigation}) => {
  const {signIn} = React.useContext(AuthStore);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoFocus
        autoCorrect={false}
      />

      <TextInput
        placeholder="Пароль"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <View>
        <Button
          text="Войти"
          onPress={async () => {
            const body = {email, password};
            signIn(body);
          }}
        />
        <Button
          text="Нет аккаунта? Зарегистрироваться"
          style={styles.transparentBtn}
          textStyle={styles.secondaryBtnText}
          onPress={() => navigation.replace(GREETING_ROUTES.SIGNUP)}
        />
      </View>
    </View>
  );
});
