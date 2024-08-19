import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setsearch] = useState('');

  const getMovies = async () => {
    try {
      const response = await fetch('https://www.superheroapi.com/api.php/1358348604650444/search/j');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.search} 
        placeholder="Search"
        onChangeText={setsearch}
        value={search}
        defaultValue={search}
      />
      <ScrollView contentContainerStyle={styles.Picpad}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            {data.map((item) => (
              <Image key={item.id} source={{ uri: item.image.url }} style={styles.pic} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    borderBottomColor: 'white',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical:'center',
    width: 280,
    height: 40,
    backgroundColor: 'white',
    borderRadius:25,
    marginTop:10
  },
  container: {
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    backgroundColor: 'black',
  },
  Picpad: {
    marginTop: 25,
    paddingTop:1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  pic: {
    width: 100,
    height: 100,
    margin: 5,
    padding: 4,
    borderWidth: 2,
    borderColor: 'lavender',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    opacity: 1,
  },
});

export default App;