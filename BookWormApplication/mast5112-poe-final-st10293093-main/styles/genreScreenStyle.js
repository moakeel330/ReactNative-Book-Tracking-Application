import {StyleSheet} from 'react-native';

export const genreScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
      },
      headerContainer: {
        backgroundColor: '#004E98',
        height: 90,
      },
      mainHeading: {
          fontSize: 32,
          textAlign: 'center',
          color: '#EBEBEB',
          marginTop: 20,
        },
          booksRead: {
            backgroundColor: '#FF6700',
            width: 170,
            marginTop: 15,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
            padding: 10,
            color: 'black',
            fontWeight: 'bold'
          },
          booksReadTxt: {
            color: 'white',
            fontSize: 15,
          },
          item: {
            padding: 10,
            marginVertical: 0,
            marginHorizontal: 16,
          },
          name: {
            fontSize: 18,
          },
          listStyle: {
            maxHeight: 200,
          },
          cardContainer: {
            marginTop: 10,
            backgroundColor: '#004E98',
            marginLeft: 10,
            marginRight: 10,
          },
          cardHeading: {
            fontSize: 28,
            color: 'white',
            alignSelf: 'center',
            fontWeight: 'bold'
          },
          historyTxt: {
            color: 'white',
            fontSize: 32,
            alignSelf: 'center',
            marginTop: 15,
            textDecorationLine: 'underline'
          },
          genreSelect: {
            color: 'white',
            fontSize: 24,
            marginTop: 10,
          }

})