import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native'

import loading from './loading.json'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie style={{width: '100%'}} resizeMode='contain' source={loading} autoSize autoPlay loop/>
    </SafeAreaView>
  );
}
