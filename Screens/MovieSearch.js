import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}  from 'react';
import { StyleSheet, SafeAreaView,Text, View,  Image, TextInput, ScrollView, Button, FlatList } from 'react-native';


const MovieSearch = props => {
  const onChangeText = React.useState(null);
  const [currentTextInput, setCurrentTextInput] = useState('superman');
  const [movies, setMovies] = useState('')

  useEffect(() => {
    const searchMovie = async () => {
      const dataIn = await fetch('http://www.omdbapi.com/?apikey=531c57cc&s=' + currentTextInput)
      const movieListRaw = await dataIn.json();
      setMovies(movieListRaw.Search);
    };
    searchMovie();
  })

  const renderItem = ({ item }) => (
    <View style={styles.Movie}>
      <Text style={styles.Title}>{item.Title}</Text>
      <Button title="Details" onPress={() => {
        props.navigation.navigate('MovieDetail', {id: item.imdbID})
      }}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* SEARCH SECTION */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="ENTER A MOVIE"
          value={currentTextInput}
          onChangeText={(text) => setCurrentTextInput(text)}
        />
        
      </View>
      {/* LIST OF MOVIES */}
      <ScrollView style={styles.ListSection}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={movie => movie.imdbID}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ListSection: {
    flex: 3,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    margin: 14,
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  Movie: {
    height: 40,
    margin: 25,
    borderWidth: 1,
    backgroundColor: 'grey',
  }
});

export default MovieSearch;
