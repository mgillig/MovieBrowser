import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}  from 'react';
import { StyleSheet, Text, View,  Image, TextInput, ScrollView, SafeAreaView, FlatList } from 'react-native';


const MovieDetail = props => {
    const [movie, setMovie] = useState('')

  useEffect(() => {
    const getMovie = async () => {
      const dataIn = await fetch('http://www.omdbapi.com/?apikey=531c57cc&i=' + props.route.params.id + '&plot=full')
      const movieRaw = await dataIn.json();
      setMovie(movieRaw);
    };
    getMovie();
  }, [])

  const renderItem = ({ item }) => (
    <Text>{item.Source}: {item.Value}</Text>
  );

  return (
    <SafeAreaView style={styles.SafeAreaView}>
        <Text style={styles.Title}>{movie.Title}</Text>
        <Text style={styles.Body}>Year: {movie.Year}</Text>
        <Text style={styles.Body}>Director: {movie.Director}</Text>
        <Text style={styles.Body}>Ratings:</Text>
        <FlatList
          data={movie.Ratings}
          renderItem={renderItem}
          keyExtractor={movie => movie.imdbID}
        />
        <Text style={styles.Body}>Plot: {movie.Plot}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center'
  },
  Body: {
    color: 'black',
    fontSize: 25
  },
  SafeAreaView: {
    margin: 15
  }
});

export default MovieDetail;