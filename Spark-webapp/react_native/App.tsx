import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import { Base, Typography } from './styles/index';
import testModel from './models/testModel'

export default function App() {

  const [data, setData] = useState(null);


  function fetchData() {
    fetch('http://localhost:4000/')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <View style={Base.base}>
      <Text>Hello</Text>
      <Button
        color='#4F4C4A'
        onPress={fetchData}
        title="Fetch some goddamn data"
      />
      { data }
    </View>
  );
}
