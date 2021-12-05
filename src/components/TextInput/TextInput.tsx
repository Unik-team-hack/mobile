import React from 'react';
import {
  TextInput as TextInputRN,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

interface TextInputProps extends React.ComponentProps<typeof TextInputRN> {
  focusedStyle?: StyleProp<TextStyle>;
}

export const TextInput: React.FC<TextInputProps> = ({
  style,
  focusedStyle,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <TextInputRN
      {...rest}
      style={[
        styles.base,
        style,
        isFocused && styles.focused,
        isFocused && focusedStyle,
      ]}
      onFocus={event => {
        setIsFocused(true);
        if (onFocus) {
          onFocus(event);
        }
      }}
      onBlur={event => {
        setIsFocused(false);
        if (onBlur) {
          onBlur(event);
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#f2f3f5',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    width: '100%',
    // marginTop: 10,
  },
  focused: {
    borderColor: '#2787f5',
  },
});
