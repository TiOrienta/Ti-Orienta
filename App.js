import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js';
import BarraPesquisa from 'BarraPesquisa.js';

export default function App() {
  return (
    <View style={styles.container}>
      <BarraPesquisa/>
      <Header/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
