import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Flipkart</Text>
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  container: {
  alignItems: 'center',
  marginBottom: 30,
},
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2874F0',
  },
  title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 20,
  textAlign: 'center',
},

subtitle: {
  fontSize: 16,
  color: '#666',
  marginTop: 10,
  textAlign: 'center',
  marginBottom: 20,
},
});