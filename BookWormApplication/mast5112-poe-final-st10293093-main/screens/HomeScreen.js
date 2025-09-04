import { useEffect, useState, useCallback } from "react";
import{
  View,
  Text,
  ScrollView
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {Surface} from 'react-native-paper';
import { homeScreenStyle } from "../styles/homeScreenStyle";

function HomeScreen(){

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [numPages, setNumPages] = useState('');
  const [genre, setGenre] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [booksCount, setBooksCount] = useState(0);
  const [averagePages, setAveragePages] = useState(0);
  const [books, setBooks] = useState([]);

  const fnGetBookInfo = async () => {
    const storedBooks = JSON.parse(await AsyncStorage.getItem('@books')) || [];

    const lastBook = storedBooks.length > 0 ? storedBooks[storedBooks.length - 1] : {};
    setTitle(lastBook.name || '');
    setAuthor(lastBook.author || '');
    setNumPages(lastBook.pages || '');
    setGenre(lastBook.genre || '');

    let total = 0;
    let average = 0;

    storedBooks.forEach(book => {
      total += book.total || 0;
    });

    if (storedBooks.length > 0) {
      average = total / storedBooks.length;
    }

    setTotalPages(total);
    setAveragePages(average);

    setBooks(storedBooks);

  };


  useFocusEffect(
    useCallback(() => {
      fnGetBookInfo();
    }, [])
  );
  return(
    <ScrollView>
    <View style={styles.container}>

    <View style={styles.headerContainer}>
      <Text style={styles.mainHeading}>BOOKWORM</Text>
    </View>

      <Surface elevation={4} mode="elevated"
      style={styles.surfaceContainer}>
      <Text style={styles.lastBookHeading}>Last Book Read</Text>
      <Text style={styles.lastBookText}>Book title: {title}</Text>
      <Text style={styles.lastBookText}>Book author: {author}</Text>
      <Text style={styles.lastBookText}>Pages: {numPages}</Text>
      <Text style={styles.lastBookText}>Book genre: {genre}</Text>
      </Surface>
    
    <View style={styles.totlAvgBlock}>
    <Surface elevation={4} mode="elevated"
      style={styles.surfaceContainer}>
          <Text style={styles.totlAvgHeading}>Total Pages</Text>
          <Text style={styles.totlAvgText}>{totalPages}</Text>
      </Surface>

      <Surface elevation={4} mode="elevated"
      style={styles.surfaceContainer}>
        <Text style={styles.totlAvgHeading}>Average Pages</Text>
        <Text style={styles.totlAvgText}>{averagePages.toFixed(2)}</Text>
      </Surface>
    </View>

    <Surface elevation={4} mode="elevated" style={styles.bookCount}>
      <Text style={styles.newBookHeading}>Total Books Read</Text>
      <Text style={styles.newBookTxt}>{books.length}</Text>
      </Surface>
  
    </View>
    </ScrollView>
  );
}

const styles = homeScreenStyle
export default HomeScreen;