import {StyleSheet} from 'react-native';

export const homeScreenStyle = StyleSheet.create({
    container: {
        height: 800,
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
      logo: {
        width: 100,
        height: 100,
        alignSelf: 'flex-end',
      },
      lastBookContainer: {
        backgroundColor: '#3A6EA5',
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 2,
        borderColor: 'black',
      },
      lastBookHeading: {
        padding: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        textDecorationLine: 'underline',
      },
      lastBookText: {
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
        paddingBottom: 5,
      },
      totlAvgBlock: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 2,
        justifyContent: 'space-evenly'
      },
      totlAvgHeading: {
        fontSize: 25,
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
      },
      totlAvgText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
      },
      menuContainer: {
        backgroundColor: 'black',
        marginTop: 25,
        padding: 5,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      iconImage: {
        width: 25,
        height: 25,
        marginTop: 10,
      },
      bookInfo: {
        backgroundColor: '#3A6EA5',
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
      },
      newBookHeading: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
      },
      newBookTxt: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
      },
      bookBtn: {
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#FF6700',
        width: 100,
        marginLeft: 150,
        borderRadius: 15,
      },
      btnTxt: {
        color: 'black',
        fontSize: 15,
      },
      surfaceContainer: {
        backgroundColor: '#004E98',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 10
      },
      bookCount: {
        backgroundColor: '#004E98',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 10,
        height: 100,
        justifyContent: 'center',
        width: 250,
        alignContent: "center",
        alignSelf: 'center'
      }
})