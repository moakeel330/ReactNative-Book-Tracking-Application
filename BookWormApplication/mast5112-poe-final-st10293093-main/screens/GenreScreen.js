import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity, 
    SafeAreaView
} from 'react-native';
import { Card } from "react-native-paper";
import { FlatList } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { genreScreenStyle } from "../styles/genreScreenStyle";



const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style = {[styles.item, {backgroundColor}]}>
    <Text style = {[styles.name, {color: textColor}]}>{item.name}</Text>
  </TouchableOpacity>
);

function GenreScreen(){
    const [selectedId, setSelectedId] = useState();
    const [newGenreList, setNewGenreList] = useState([]);

    const loadList = async () => {
      const storedList = await AsyncStorage.getItem('@NewList');
      if (storedList) {
        const parsedList = JSON.parse(storedList);
        setNewGenreList(parsedList)
      }
    };

    useFocusEffect(
      React.useCallback(() => {
        loadList();
      }, [])
    )

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? '#004E98' : '#FF6700';
      const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
      item={item}
      onPress={() => setSelectedId(item.name)}
      backgroundColor={backgroundColor}
      textColor={color}
      />
    )
    };

    const selectedGenre = newGenreList.find((genre) => genre.name === selectedId);

    return(
          <SafeAreaView style = {styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.mainHeading}>Genre</Text>
            </View>

            <Card style = {styles.cardContainer}>
              <Card.Content>
                <Text style = {styles.cardHeading}>Genre List</Text>
            <FlatList
            data={newGenreList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId} 
            style = {styles.listStyle}/>
            
            {selectedId && (
              <>
            <Text style = {styles.historyTxt}>History</Text>
            <Text style = {styles.genreSelect}>Genre Chosen: {selectedId}</Text>
            <Text style = {styles.genreSelect}>Total Books: {selectedGenre.count}</Text>
            <Text style = {styles.genreSelect}>Total Pages: {selectedGenre.page}</Text>
            </>
            )}
            </Card.Content>
            </Card>

          </SafeAreaView>
    );
}

const styles = genreScreenStyle
export default GenreScreen