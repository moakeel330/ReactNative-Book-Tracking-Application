import {StyleSheet} from 'react-native';

export const historyScreenStyle = StyleSheet.create({
    container: {
        height: 1000,
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
    pageHeading: {
        fontSize: 32,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
    },
    surfaceContainer: {
        backgroundColor: '#004E98',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        padding: 10
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
        fontSize: 15,
        color: 'white',
        marginLeft: 10,
        paddingBottom: 5,
      },
      historyBtn: {
        backgroundColor: '#FF6700',
        width: 150,
        marginTop: 10,
        alignSelf: 'center',
        marginBottom: 10,
      }
})