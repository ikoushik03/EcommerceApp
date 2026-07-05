// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const LoginScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <Text style={styles.subtitle}>
//         Enter your mobile number to continue
//       </Text>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#2874F0',
//     marginBottom: 10,
//   },

//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

// import React from 'react';
// import { SafeAreaView, StyleSheet, View } from 'react-native';

// const LoginScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>

//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import CustomInput from '../../components/Input/CustomInput';

import AppLogo from '../../components/Logo/AppLogo';
import CustomText from '../../components/Text/CustomText';



const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <AppLogo />

        <CustomText style={styles.title}>
          Login to continue
        </CustomText>

        <CustomText style={styles.subtitle}>
          Enter your mobile number
        </CustomText>
        <CustomInput
  placeholder="Enter Mobile Number"
  keyboardType="phone-pad"
/>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 20,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});