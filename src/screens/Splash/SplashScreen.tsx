// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const SplashScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>Flipkart</Text>
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2874F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     color: '#fff',
//     fontSize: 36,
//     fontWeight: 'bold',
//   },
// });

import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Flipkart</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2874F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
});