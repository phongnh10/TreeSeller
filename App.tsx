import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { AppProvider } from './src/AppContext/AppContext';
import AppNavigation from './src/AppNavigation/AppNavigation';
import { Provider } from "react-redux";
import { store } from "./src/Redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <AppNavigation />
        </SafeAreaView>
      </AppProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});