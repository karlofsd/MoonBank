import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  inputContainer: {
    marginTop:10,
    alignItems:'center',
    width:'100%',
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 25,
  },
  input: {
    width: '75%',
    height: 30,
    borderRadius: 10
  },
  opciones: {
    alignItems:'center',
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  wifi: {
    paddingStart: 20
  }
})

export default style;