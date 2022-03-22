import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//touchableOpacity is a way which helps us visually to notice when a press ia made
const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.listItem}>
        <Text style={{ width: "80%" }}>
          {props.title}
        </Text>
        <AntDesign
          name="check"
          size={34}
          style={{backgroundColor:'white', marginLeft:'10%'}}
          color="green"
          onPress={() => props.onDelete(props.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderColor: "black",
    backgroundColor: "#ccc",
    borderWidth: 1,
    margin: 10,
    alignItems : 'center'
  },
});

export default GoalItem;
