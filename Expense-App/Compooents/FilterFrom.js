import React, { useState } from 'react';
import { StyleSheet, Text, Modal, View } from 'react-native';
// import Modal from 'react-native-modal';
import Button from 'react-native-paper';

const FilterFrom = ({
  Pressedincome,
  PressedExpense,
  Pressedreset,
  notvisible,
  visible,
}) => {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };
  return (
    <View style={styles.flexView}>
      {/* <StatusBar /> */}
      {/* <View style={styles.btnContainer}>
        <Button icon="camera" mode="outlined" onPress={visible}>
          Show Bottom Sheet
        </Button>
        <Button title="Show Bottom Sheet" onPress={toggleModal} />
      </View> */}

      <Modal
        onBackdropPress={notvisible}
        onBackButtonPress={notvisible}
        isVisible={visible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.btncont}>
            <Button mode="outlined" onPress={Pressedincome}>
              income me
            </Button>
            <Button mode="outlined" onPress={PressedExpense}>
              Expense me
            </Button>
            <Button mode="outlined" onPress={Pressedreset}>
              reset me
            </Button>
          </View>
          {/* <View style={styles.center}>
        <View style={styles.barIcon} />
        <Text style={styles.text}>Welcome To My Bottom Sheet</Text>
      </View> */}
        </View>
      </Modal>
    </View>
  );
};

export default FilterFrom;

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
    backgroundColor: '#161616',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
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
  btnContainer: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 500,
  },
  btncont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
