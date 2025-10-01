import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
 
// or any files within the Snack

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{textAlign: 'center'}}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
       <View style={{ flex: 3, flexDirection: 'row', justifyContent:'center', alignItems: 'center', padding: 10, backgroundColor:'lightpink', borderRadius: 50 }}>
        <Image source ={(require("../assets/bike.png"))} style={{width: 300, height: 280}}  />
      </View>

       <View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
       <TouchableOpacity style={{backgroundColor: "#E94141", width: '100%', height: 40, borderRadius: 40}}
       onPress={()=> navigation.navigate("AllBike")}>
        <Text style={{color: 'white', fontSize: '20px', fontWeight: 700, textAlign: 'center'}}>Get Started </Text>
       </TouchableOpacity>
      </View>
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
});
