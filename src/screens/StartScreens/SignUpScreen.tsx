import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import AuthStore from '@/store/AuthStore';
import {TextInput} from '@/components/TextInput';
import {Button} from '@/components/Button';

import {startScreensStyles as styles} from './StartScreens.styles';
import {formConfig, validators} from './signupFormConfig';
import {SignUpRequestDto} from '@/api/dto';
import {GREETING_ROUTES} from '@/navigation/GreetingNavigator';

const STEPS = formConfig.length;
export const SignUpScreen = observer(({navigation}) => {
  const {signUp} = React.useContext(AuthStore);
  const [step, setStep] = React.useState(0);
  const [userData, setUserData] = React.useState<SignUpRequestDto>({});

  const disabledNext = !validators[step](userData);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{`Шаг ${step + 1} из ${STEPS}`}</Text>
      {formConfig[step].map((x, index) => (
        <React.Fragment key={x.name}>
          <TextInput
            placeholder={x.label}
            style={styles.input}
            autoCapitalize={x.autoCapitalize}
            secureTextEntry={x.secureTextEntry}
            value={userData[x.name]}
            onChangeText={value =>
              setUserData(currState => ({...currState, [x.name]: value}))
            }
            autoFocus={index === 0}
            autoCorrect={false}
          />
        </React.Fragment>
      ))}

      <View style={styles.stepButtons}>
        {step > 0 && (
          <Button
            text="Назад"
            style={styles.backBtn}
            textStyle={styles.backBtnText}
            onPress={() => {
              setStep(curr => curr - 1);
            }}
          />
        )}
        {step + 1 < STEPS ? (
          <Button
            text="Далее"
            style={[disabledNext && styles.btnDisabled]}
            onPress={() => {
              setStep(curr => curr + 1);
            }}
            disabled={disabledNext}
          />
        ) : (
          <Button
            text="Зарегистрироваться"
            style={[styles.flex, disabledNext && styles.btnDisabled]}
            onPress={() => {
              if (
                userData.password.length > 3 &&
                userData.password === userData.password2
              ) {
                signUp(userData);
              }
            }}
            disabled={disabledNext}
          />
        )}
      </View>
      <Button
        text="Есть аккаунт? Войти"
        style={styles.transparentBtn}
        textStyle={styles.secondaryBtnText}
        onPress={() => navigation.replace(GREETING_ROUTES.SIGNIN)}
      />
    </View>
  );
});
