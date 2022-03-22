import React,{useState} from 'react';
import { View,TextInput,StyleSheet,Button,Modal } from 'react-native';

const GoalInput = props  => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalChangeHandler = enteredText => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }

    
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal"
        style = {styles.input}
        onChangeText={goalChangeHandler}
        value = {enteredGoal}
        />

        <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="ADD"
           onPress={addGoalHandler}
          />
        </View> 
        <View style={styles.button}>
        <Button title="CANCEL" onPress={props.onCancel}
        color="red"
        />
        </View>
      </View>
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
      inputContainer: {
        display : 'flex', flex: 1, justifyContent : 'center', alignItems:'center', width : '100%'
      },
      input: {
        width : '80%' ,borderColor: 'black', borderWidth:1, padding:10, marginBottom:10
      },
      buttonContainer: {
        flexDirection:'row', justifyContent:'space-around', width:'60%',marginTop: 20
      },
      button : {
        width: '40%'
      }
})
//We cant apply style to button directly, we have to wrap it inside view

export default GoalInput;