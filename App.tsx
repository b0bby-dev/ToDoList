import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.baseContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>All Tasks</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>No Task</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => Alert.alert('Pressed!')}
          activeOpacity={0.7}
        >
          <Text style={styles.contentButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.footerContainer}>
        <TextInput
          style={styles.footerContainerInput}
          placeholder="Enter Quick Task Here"
          placeholderTextColor="#999"
        ></TextInput>
      </View> */}

      <Modal transparent={true}>
        <View style={styles.modalBaseContainer}>
          <View style={styles.modalContainer}>
            <View>
              <Text style={styles.modalContainerText}>Add Task</Text>
            </View>

            <View style={styles.modalContainerCloseButton}>
              <TouchableOpacity>
                <Text style={styles.modalContainerCloseButtonText}>X</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TextInput
                style={styles.modalContainerInput}
                placeholder="Enter a Task"
                placeholderTextColor="#999"
              ></TextInput>
            </View>

            <View style={styles.modalContainerAddButton}>
              <TouchableOpacity>
                <Text style={styles.modalContainerAddButtonText}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },

  headerContainer: {
    backgroundColor: '#AFC9FF',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 15,
    paddingLeft: 30,
  },

  contentContainer: {
    backgroundColor: '#F9FBFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentText: {
    fontSize: 21,
    color: '#D3D3D3',
    fontWeight: '400',
    padding: 130,
    paddingBottom: 240,
    paddingTop: 240,
  },

  addButton: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: '#AFC9FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 60,
    width: 60,
    borderWidth: 0,
    borderRadius: 30,
    marginLeft: 270,
  },

  contentButtonText: {
    fontSize: 50,
    color: 'white',
    lineHeight: 60,
  },

  footerContainer: {
    backgroundColor: '#AFC9FF',
  },

  footerContainerInput: {
    fontSize: 21,
  },

  modalBaseContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContainer: {
    height: '50%',
    width: '90%',
    backgroundColor: '#F9FBFF',
    borderRadius: 15,
  },

  modalContainerText: {
    fontSize: 30,
    fontWeight: 900,
    padding: 15,
  },

  modalContainerCloseButton: {
    position: 'absolute',
    right: 9,
    top: 3,
  },

  modalContainerCloseButtonText: {
    color: 'red',
    fontSize: 18,
  },

  modalContainerInput: {
    backgroundColor: '#AFC9FF',
    fontSize: 21,
    padding: 6,
    margin: 3,
    borderRadius: 5,
    color: 'white',
  },

  modalContainerAddButton: {
    backgroundColor: '#6B8DD6',
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -45 }],
    height: 60,
    width: 90,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContainerAddButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
  },
});
export default App;
