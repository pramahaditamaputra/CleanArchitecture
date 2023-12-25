import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useGetAllProducts} from '../application/hooks/useGetAllProducts';

const App = () => {
  const {
    data: products,
    isError,
    error,
    isLoading,
    getAllProducts,
  } = useGetAllProducts();

  const renderListProducts = () => {
    return products?.map(product => (
      <View key={product.id}>
        <Text>{product.brand}</Text>
        <Image source={{uri: product.thumbnail}} width={50} height={50} />
      </View>
    ));
  };

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
