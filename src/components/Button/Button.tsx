import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  icon?: string;
  iconSize?: number;
  thin?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconSize = 14,
  thin = false,
  style,
  textStyle,
  iconStyle,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, thin && styles.thin, style]}
      {...rest}>
      {icon && (
        <Icon
          name={icon}
          style={[styles.icon, iconStyle]}
          color="white"
          size={iconSize}
        />
      )}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
