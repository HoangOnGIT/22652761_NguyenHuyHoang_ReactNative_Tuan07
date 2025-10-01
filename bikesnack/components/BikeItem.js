import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function BikeItem({ bike, nav }) {
  return (
    <TouchableOpacity style={styles.card}
    onPress={() => nav.navigate('Detail', {bike, nav}) }
    >
      <Image source={bike.image} style={styles.image} resizeMode="contain" />

      <View style={styles.info}>
        <Text style={styles.name}>{bike.name}</Text>
        <Text style={styles.price}>${bike.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 4,
    padding: 5,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
   
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  info: {
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 4,
  },
  price: {
    color: 'green',
    fontWeight: '600',
    marginBottom: 4,
  },
});
