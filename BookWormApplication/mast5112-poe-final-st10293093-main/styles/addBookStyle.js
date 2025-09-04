import {StyleSheet} from 'react-native';

export const addBookStyle = StyleSheet.create({
    container: {
        backgroundColor: '#C0C0C0',
        height: 700
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
      inputs: {
        textAlign: 'left',
        borderWidth: 2,
        borderColor: '#FF6700',
        borderRadius: 20,
        backgroundColor: "white",
        color: "black",
        marginLeft: 10,
        marginRight: 10,
      },
      heading: {
        fontSize: 30,
        color: 'black',
        left: 5,
        marginTop: 5,
      },
      line: {
        width: 175,
        height: 1,
        backgroundColor: '#FF6700',
        marginLeft: 5
      },
      inputHeading: {
        fontSize: 20,
        color: 'black',
        left: 10,
        marginTop: 10,
        marginBottom: 5,
      },
      addBookBtn: {
        backgroundColor: '#FF6700',
        alignItems: 'center',
        width: 100,
        height: 40,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 150
      },
      btnText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10
      },
      pickerContainer: {
        borderWidth: 2,
        borderColor: '#FF6700',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
      },
      errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 10,
      },
      animationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      animation: {
        width: '100%',
        height: '100%',
      }
})