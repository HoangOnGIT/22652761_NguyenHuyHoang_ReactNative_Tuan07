import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function DetailScreen({ route }) {
  const { bike, nav } = route.params;

  return (
    <>
      <TouchableOpacity onPress={() => nav.navigate('Home')}>
        <Text>{"< Home"}</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={bike.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.name}>{bike.name}</Text>
        <Text style={styles.price}>${bike.price}</Text>
        <Text style={styles.description}>{bike.description}</Text>
        <Text style={styles.type}>Type: {bike.type}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
  },
  type: {
    fontSize: 14,
    color: '#888',
  },
});
