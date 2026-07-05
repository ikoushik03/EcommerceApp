import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#999"
      {...props}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
  height: 50,
  width: '100%',
  borderWidth: 1,
  borderColor: '#D9D9D9',
  borderRadius: 8,
  paddingHorizontal: 15,
  fontSize: 16,
  backgroundColor: '#FFFFFF',
  marginTop: 20,
},
});

