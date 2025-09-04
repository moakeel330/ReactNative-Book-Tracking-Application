import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { Button, Surface } from "react-native-paper";
import { historyScreenStyle } from "../styles/historyScreenStyle";

function HistoryScreen(){
  const [allBooks, setAllBooks] = useState([]);
  const [lastBooks, setLastBooks] = useState([]);
  const [fullHistory, setFullHistory] = useState(false);

  const fetchBooks = async () => {
    try {
      const books = JSON.parse(await AsyncStorage.getItem('@books')) || [];
      console.log('All Books:', books);
      setAllBooks(books);

      if (fullHistory){
        setLastBooks(books);
      } else {
        const lastThreeBooks = books.slice(-3);
      console.log('Latest Books:', lastThreeBooks);
      setLastBooks(lastThreeBooks);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchBooks();
    }, [])
  );

  useEffect(() => {
    fetchBooks();
  }, [fullHistory]);

    return(
        <ScrollView>
        <View style={styles.container}>

            <View style={styles.headerContainer}>
            <Text style={styles.mainHeading}>History</Text>
            </View>

            <View>
                <Text style={styles.pageHeading}>Last Books Read</Text>
            </View>

          {lastBooks.map((book, index) => (
            <Surface key = {index} elevation={4} mode="elevated"
      style={styles.surfaceContainer}>
      <Text style={styles.lastBookHeading}>Book {index + 1}:</Text>
      <Text style={styles.lastBookText}>Book title: {book.name}</Text>
      <Text style={styles.lastBookText}>Book author: {book.author}</Text>
      <Text style={styles.lastBookText}>Pages: {book.pages}</Text>
      <Text style={styles.lastBookText}>Book genre: {book.genre}</Text>
      </Surface>
      ))}

        {lastBooks.length < 3 && 
          !fullHistory &&
          [1, 2].map((placeHolderIndex) => (
          <Surface key={placeHolderIndex} elevation={4} mode="elevated" style={styles.surfaceContainer}>
            <Text style = {styles.lastBookHeading}>Book {lastBooks.length + placeHolderIndex}:</Text>
            <Text style = {styles.lastBookText}>No information available</Text>
          </Surface>
          ))}

          <Button
            icon="history"
            mode="contained"
            style = {styles.historyBtn}
            onPress={() => setFullHistory(!fullHistory)}>
            <Text>{fullHistory ? "Last 3 books" : "Full History"}</Text>
            </Button>
      
            
        </View>
        </ScrollView>

        
    );
}

const styles = historyScreenStyle
export default HistoryScreen