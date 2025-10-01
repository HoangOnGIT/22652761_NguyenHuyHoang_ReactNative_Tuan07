import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import bike from '../assets/bike.png';
import bike1 from '../assets/bike1.png';
import bike2 from '../assets/bike2.png';
import BikeItem from './BikeItem';

export default function AllBike({ navigation }) {
  const [active, setActive] = useState('all');
  const bikes = [
    {
      name: 'Pina bike 1',
      image: bike,
      price: 1800,
      description: 'blah blah blah blah Lorem picsum',
      type: 'roadbike',
    },
    {
      name: 'Pina bike 2',
      image: bike2,
      price: 1300,
      description: 'blah blah blah blah Lorem picsum',
      type: 'mountainbike',
    },
    {
      name: 'Pina bike 3',
      image: bike1,
      price: 1600,
      description: 'blah blah blah blah Lorem picsum',
      type: 'mountainbike',
    },
    {
      name: 'Pina bike 4',
      image: bike1,
      price: 1200,
      description: 'blah blah blah blah Lorem picsum',
      type: 'mountainbike',
    },
    {
      name: 'Pina bike 5',
      image: bike2,
      price: 1100,
      description: 'blah blah blah blah Lorem picsum',
      type: 'mountainbike',
    },
    {
      name: 'Pina bike 6',
      image: bike,
      price: 1000,
      description: 'blah blah blah blah Lorem picsum',
      type: 'roadbike',
    },
  ];


  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'start', fontSize: 25, color: 'red' }}>
          World's best bike
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <TouchableOpacity
          style={[
            styles.btn,
            active == 'all' ? styles.btn_Active : styles.btn_Inactive,
          ]}
          onPress={() => setActive('all')}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            active == 'roadbike' ? styles.btn_Active : styles.btn_Inactive,
          ]}
          onPress={() => setActive('roadbike')}>
          <Text>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            active == 'mountainbike' ? styles.btn_Active : styles.btn_Inactive,
          ]}
          onPress={() => setActive('mountainbike')}>
          <Text>Mountain</Text>
        </TouchableOpacity>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <FlatList
          data={active === 'all' ? bikes : bikes.filter((bike) => bike.type === active)}
          renderItem={({item}) => <BikeItem bike={item} nav= {navigation} />}
          numColumns={2}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  btn: {
    padding: 5,
  },
  btn_Inactive: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'pink',
  },
  btn_Active: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
    color: 'pink',
  },
});
