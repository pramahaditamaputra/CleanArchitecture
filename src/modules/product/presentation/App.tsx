import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useGetAllProducts} from '../application/hooks/useGetAllProducts';
import {useLogin} from '../../auth/application/hooks/useLogin';

const App = () => {
  const {
    data: products,
    isError,
    error,
    isLoading,
    getAllProducts,
  } = useGetAllProducts();

  const {data: auth, login} = useLogin();

  const renderListProducts = () => {
    return products?.map(product => (
      <View key={product.id}>
        <Text>{product.brand}</Text>
        <Image source={{uri: product.thumbnail}} width={50} height={50} />
      </View>
    ));
  };

  useEffect(() => {
    login({username: 'kminchelle', password: '0lelplR'});
  }, []);

  console.log('auth', auth);

  return (
    <SafeAreaView>
      <Button title="Get All Products" onPress={getAllProducts} />
      <ScrollView>
        {isLoading ? <ActivityIndicator /> : renderListProducts()}
        {isError && <Text>{error}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
