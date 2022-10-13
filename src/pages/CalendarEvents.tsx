import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Alert, Modal, Pressable } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from "../constants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};
function CalendarEvent() {
  const [items, setItems] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [text, setText] = useState('00.00');
  const [text2, setText2] = useState('00.00');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShow(false);
    let tempDate = new Date(currentDate);
    let fTime = tempDate.getHours() + '.' + tempDate.getMinutes();
    setText(fTime)
  }
  const onChange2 = (event, selectedDate2) => {
    setShow2(false);
    const currentDate2 = selectedDate2 || new Date();
    let tempDate2 = new Date(currentDate2);
    let fTime2 = tempDate2.getHours() + '.' + tempDate2.getMinutes();
    setText2(fTime2);
  }
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}
        onPress={() => setModalVisible(true)}>
        <Card>
          <Card.Content>
            <View
              style={{
                width: 70,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, }}>
      <View style={styles.container}>
        <View style={styles.newEvent}>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Rezervasyon Adı</Text>
                  <TextInput
                    editable={true}
                    style={styles.textInput}
                  />
                  <Text style={styles.modalText}>Açıklama</Text>
                  <TextInput
                    editable={true}
                    style={styles.textInput}
                  />
                  <Text style={styles.modalText}>Etkinlik Başlangıç Saati:</Text>
                  <View style={styles.textInput}>
                    <TouchableOpacity
                      style={{ flexDirection: "row", justifyContent: "space-between" }}
                      onPress={() => setShow(true)}>
                      <Text style={{}}> {text}</Text>
                      <AntDesign name="downcircleo" size={25} color="white" />
                    </TouchableOpacity>
                    <View>
                      {
                        show && (
                          <DateTimePicker
                            testID='dateTimePicker'
                            value={new Date()}
                            mode='time'
                            display='default'
                            onChange={onChange}
                          />
                        )
                      }
                    </View>
                  </View>
                  <Text style={styles.modalText}>Etkinlik Bitiş Saati:</Text>
                  <View style={styles.textInput}>
                    <TouchableOpacity
                      style={{ flexDirection: "row", justifyContent: "space-between" }}
                      onPress={() => setShow2(true)}>
                      <Text style={{}}> {text2}</Text>
                      <AntDesign name="downcircleo" size={25} color="white" />
                    </TouchableOpacity>
                    <View>
                      {
                        show2 && (
                          <DateTimePicker
                            testID='dateTimePicker'
                            value={new Date()}
                            mode='time'
                            display='default'
                            onChange={onChange2}
                          />
                        )
                      }
                    </View>
                  </View>
                  <Text style={styles.modalText}>Tekrarlanma Sıklığı</Text>
                  <TextInput
                    editable={true}
                    style={styles.textInput}
                  />
                  <View>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Rezerve Et</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>İptal Et</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
            <View style={{ alignItems: "flex-end" }}>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: colors.blue, marginRight: 5, marginTop: 5 }}> Toplantı Oluştur</Text>
            <AntDesign name="pluscircleo" size={25} color={colors.blue} />
          </Pressable>
        </View>
      </View>
      <Agenda
        items={items}
        timelineLeftInset={50}
        loadItemsForMonth={loadItems}
        selected={Date().toString()}
        renderItem={renderItem} />
    </View>
  );
}
export default CalendarEvent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: "column"
  },
  textInput: {
    fontSize: 18,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    opacity: 0.8,
    
  },
  icon: {
    height: 45,
    width: 45,
    borderRadius: 32 / 2,
    borderColor: "black",
  },
  newEvent: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    opacity: 0.88,
    backgroundColor: colors.blue,
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    height: "auto",
    width: "80%",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flexDirection: "row",
  },
  buttonOpen: {
    backgroundColor: "white",
  },
  buttonClose: {
    marginTop: 40,
    width: "auto",
    height: "auto",
    backgroundColor: "white",
  },
  textStyle: {
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
    marginTop: 10,
    color:"white"
  }
});