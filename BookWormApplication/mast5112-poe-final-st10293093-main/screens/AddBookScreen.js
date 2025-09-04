import { useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import { TextInput } from 'react-native-paper';
import { Alert } from "react-native";
import { genreList } from "../components/genreList";
import { addBookStyle } from "../styles/addBookStyle";

function AddBookScreen(){
    const [bookName, setBookName] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookPages, setBookPages] = useState(0);
    const [bookGenre, setBookGenre] = useState('');
    const [bookCount, setBookCount] = useState(0);
    const [totalAmntPages, setTotalAmntPages] = useState(0);
    const [average, setAverage] = useState(0);
    const [nameError, setNameError] = useState(null);
    const [authorError, setAuthorError] = useState(null);
    const [pagesError, setPagesError] = useState(null);

    // Async Storage save book function
    const fnSaveBookDetails = async () => {
        const nameError = validateName(bookName);
        const authorError = validateAuthor(bookAuthor);
        const pagesError = validatePages(bookPages);

    // Form validation
        if (nameError || authorError || pagesError) {
            setNameError(nameError);
            setAuthorError(authorError);
            setPagesError(pagesError);
        } else {
            setNameError(null);
            setAuthorError(null);
            setPagesError(null);
        
            const genreIndex = genreList.findIndex((genre) => genre.name === bookGenre);
        if (genreIndex !== -1){
            const updatedGenreList = [...genreList];
            updatedGenreList[genreIndex].count += 1;
            updatedGenreList[genreIndex].page += parseInt(bookPages);

            AsyncStorage.setItem('@NewList', JSON.stringify(updatedGenreList));
        }

        const parsedPages = parseInt(bookPages);
        const newBookCount = bookCount + 1;
        const totalPage = parseInt(totalAmntPages) + parsedPages;


    // AsyncStorage to store  items
        AsyncStorage.setItem('@bookName', bookName);
        AsyncStorage.setItem('@bookAuthor', bookAuthor);
        AsyncStorage.setItem('bookPages', bookPages);
        AsyncStorage.setItem('@bookGenre', bookGenre);
        AsyncStorage.setItem('@bookCount', bookCount.toString());
        AsyncStorage.setItem('@totalPages', totalPage.toString());

    // Calculating the average pages
        setBookCount(newBookCount);
        setTotalAmntPages(totalPage);
        if (bookCount > 0) {
            const avg = totalPage / newBookCount;
            AsyncStorage.setItem('@average', avg.toString())
            setAverage(avg);
        }
        
        const newBook = {
            name: bookName,
            author: bookAuthor,
            pages: parsedPages,
            genre: bookGenre,
            total: totalPage,
        };

        const existingBooks = JSON.parse(await AsyncStorage.getItem('@books')) || [];
        existingBooks.push(newBook);

        AsyncStorage.setItem('@books', JSON.stringify(existingBooks));

        Alert.alert('Success', 'Book added');

    // Clear form 
        setBookName('');
        setBookAuthor('');
        setBookPages(0);
        setBookGenre('');
    };
    };

    const validateName = (name) => {
        return name.length < 1 ? 'Book name is required' : null;
    };
    const validateAuthor = (author) => {
        return author.length < 1 ? 'Author name is required' : null;
    };

    const validatePages = (pages) => {
        if (parseInt(pages) <= 0 || isNaN(parseInt(pages))){
            return 'Number of pages cannot be 0';
        };
    }

    return(
        <ScrollView>
            
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.mainHeading}>Add a Book</Text>
            </View>

            <View>
                <Text style={styles.heading}>Book details:</Text>
                <View style={styles.line}></View>
                <Text style={styles.inputHeading}>Enter the book name:</Text>
                <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput
                label="Name of Book"
                value={bookName}
                onChangeText={(data) => setBookName(data)}
                mode="outlined" 
                cursorColor="#FF6700"
                outlineColor="#FF6700"
                activeOutlineColor="#004E98"
                style={{marginLeft: 10, marginRight: 10}}
                outlineStyle={{borderRadius: 15}}/>
                {nameError && <Text style={styles.errorText}>{nameError}</Text>}
                </KeyboardAvoidingView>
                <Text style={styles.inputHeading}>Enter the author:</Text>
                <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput
                    label="Book author"
                    onChangeText={(data) => setBookAuthor(data)}
                    value={bookAuthor}
                    mode="outlined" 
                    cursorColor="#FF6700"
                    outlineColor="#FF6700"
                    activeOutlineColor="#004E98"
                    style={{marginLeft: 10, marginRight: 10}}
                    outlineStyle={{borderRadius: 15}}
                />
                {authorError && <Text style={styles.errorText}>{authorError}</Text>}
                </KeyboardAvoidingView>
                <Text style={styles.inputHeading}>Enter the amount of pages:</Text>
                <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput
                    placeholder="Number of pages"
                    onChangeText={(text) => setBookPages(text)}
                    value={bookPages.toString()}
                    keyboardType="numeric"
                    mode="outlined" 
                    cursorColor="#FF6700"
                    outlineColor="#FF6700"
                    activeOutlineColor="#004E98"
                    style={{marginLeft: 10, marginRight: 10}}
                    outlineStyle={{borderRadius: 15}}
                />
                {pagesError && <Text style={styles.errorText}>{pagesError}</Text>}
                </KeyboardAvoidingView>

                <Text style={styles.inputHeading}>Book genre:</Text>
                <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={bookGenre}
                    onValueChange={(item2Value, item2Index) => setBookGenre(item2Value)}
                    >
                        {genreList.map(genre => (
                            <Picker.Item key={genre.id} label={genre.name} value={genre.name} />
                        ))}
                    </Picker>
                    </View>
                    <Button icon='plus-circle-outline' mode="contained" 
                    style={{width: 150, alignSelf: 'center', marginTop: 15, marginBottom: 15}} 
                    buttonColor="#FF6700"
                    onPress={fnSaveBookDetails}> 
                        Add Book
                    </Button>   
            </View>
        </View>
        </ScrollView>
    );
}

const styles = addBookStyle
export default AddBookScreen