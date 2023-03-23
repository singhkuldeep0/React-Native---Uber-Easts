import React from 'react';
import { View, StyleSheet} from 'react-native';
import Home from './src/screens/Home';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
