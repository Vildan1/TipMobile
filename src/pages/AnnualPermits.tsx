import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

const AnnualPermits = () => {
  const [startDateLabel, setstartDateLabel] = useState(
    "Başlangıç Tarihini Seçin"
  );
  const [endDateLabel, setendDateLabel] = useState("Bitiş Tarihini Seçin");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Yıllık İzin", value: "0" },
    { label: "Doğum İzni", value: "1" },
    { label: "Mazeret İzni", value: "2" },
  ]);

  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [showStartDate, setshowStartDate] = useState(false);
  const [showEndDate, setshowEndDate] = useState(false);

  return (
    <View style={styles.main}>
      <DropDownPicker
        style={styles.text1}
        placeholder="İzin Türü Seçiniz"
        open={open}
        value={value}
        onOpen={() =>  setshowStartDate(false)}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setshowStartDate(!showStartDate)}
        style={styles.dateGroup}
      >
        <Text>{startDateLabel}</Text>
        <Icon
          style={{ position: "absolute", right: 5 }}
          name={"keyboard-arrow-down"}
          size={30}
          color={"gray"}
        ></Icon>
      </TouchableOpacity>
      {showStartDate && (
        <>
          <DatePicker
            mode="calendar"
            onDateChange={(date) => {
              var format = getFormatedDate(new Date(date), "DD/MM/YYYY");
              setstartDateLabel(format);
            }}
            visible={false}
            onSelectedChange={(date) => setSelectedStartDate(date)}
          />
          <View>
            <TouchableOpacity
              onPress={() => setshowStartDate(!showStartDate)}
              style={{
                marginTop: 10,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  backgroundColor: "orange",
                  width: 100,
                  height: 40,
                  borderRadius: 10,
                  textAlign: "center",
                  lineHeight: 40,
                  color: "white",
                  fontSize:16,
                }}
              >
                Kapat
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setshowEndDate(!showEndDate)}
        style={styles.dateGroup}
      >
        <Text>{endDateLabel}</Text>
        <Icon
          style={{ position: "absolute", right: 5 }}
          name={"keyboard-arrow-down"}
          size={30}
          color={"gray"}
        ></Icon>
      </TouchableOpacity>
      {showEndDate && (
        <>
          <DatePicker
            mode="calendar"
            minuteInterval={30}
            onDateChange={(date) => {
              var format = getFormatedDate(new Date(date), "DD/MM/YYYY");
              setendDateLabel(format);
            }}
            visible={false}
            onSelectedChange={(date) => setSelectedEndDate(date)}
          />
          <View>
            <TouchableOpacity
              onPress={() => setshowEndDate(!showEndDate)}
              style={{
                marginTop: 10,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  backgroundColor: "orange",
                  width: 100,
                  height: 40,
                  borderRadius: 8,
                  textAlign: "center",
                  lineHeight: 40,
                  color: "white",
                  fontSize: 16,
                }}
              >
                Kapat
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      <View  style={styles.touchButton}>
        <TouchableOpacity >
          <Text style={styles.textButton}>
              Gönder
          </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    margin: 10,
    marginTop:60
  },
  datePickerStyle: {
    width: 230,
  },
  text1: {
    borderColor: "#D4D4D4",
    opacity: 0.5,
  },
  dateGroup: {
    opacity: 0.5,
    width: "100%",
    marginTop: 10,
    height: 45,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  touchButton:{
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  textButton:{
    backgroundColor: "#1CB1E2",
    paddingLeft:10,
    paddingRight:10,
    height: "auto",
    borderRadius: 8,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 40,
    color: "white",
    fontSize: 16,
  },
});
export default AnnualPermits;
