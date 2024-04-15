import React, {useEffect} from 'react';
import {View} from 'react-native';
import api from '../services/api';
function Main(): React.JSX.Element {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await api.get('setor/');
    console.log(data.data);
  };

  return <View />;
}
export default Main;
