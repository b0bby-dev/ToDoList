import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (<View style={styles.baseContainer}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>All Lists</Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.contentText}>Nothing to do</Text>
    </View>
  </View>
    
  )
  

}

const styles = StyleSheet.create({
  baseContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  headerContainer:{
    backgroundColor:"#000000",
    height:56
  },
  headerText:{
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    padding:15
  },
  contentContainer:{
    backgroundColor:"#083A66",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  contentText:{
    fontSize:21,
    color:"#B0C4D4",
    fontWeight:"400",
    textAlign:"center",     
  }
}

)
export default App; 