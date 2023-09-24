import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';

const BottMode = ({
  Pressedincome,
  PressedExpense,
  Pressedreset,
  onBackdropPress,
  onBackButtonPress,
  onSwipeComplete,
  visible,
}) => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
  return (
    <View style={styles.flexView}>
      {/* <View style={styles.btnContainer}>
        <Button mode="outlined" onPress={toggleModal}>
          Show Bottom Sheet
        </Button>
      </View> */}
      <Modal
        // onBackdropPress={() => setModalVisible(false)}
        // onBackButtonPress={() => setModalVisible(false)}
        // isVisible={isModalVisible}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        isVisible={visible}
        swipeDirection="down"
        onSwipeComplete={onSwipeComplete}
        // onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.titlemodal}>Filter By</Text>
          <View style={styles.btncont}>
            <Button mode="outlined" onPress={Pressedincome}>
              income
            </Button>
            <Button mode="outlined" onPress={PressedExpense}>
              Expense
            </Button>
            <Button mode="outlined" onPress={Pressedreset}>
              reset
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottMode;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#FFF',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 300,
    paddingBottom: 20,
  },
  center: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: '#bbb',
    fontSize: 24,
    marginTop: 100,
  },
  titlemodal: {
    color: '#000',
    fontSize: 17,
    marginLeft: 23,
    marginBottom: 10,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: 500,
  },
  btncont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
