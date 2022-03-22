import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
//default flex direction in react native is column
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
 
  const addGoalHandler = (goalTitle) => {
    if(goalTitle.length === 0){
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals,
    {
      id : Math.random().toString(),
      value : goalTitle
    }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }
  //Flatlist doesnt work with an array of strings, instead it should be an array of objects with one property as key
  // View component has more style options than text component
  return (
    <View style={styles.screen}>
      <Button style={styles.button} title="Add new goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler}/>
      <FlatList 
         keyExtractor = {(item,index) => item.id}
         data={courseGoals} 
         renderItem={itemData => 
        (
         <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
        )}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:30,
    // display : 'flex',
    // alignItems : 'center',
    // justifyContent : 'center'
  },
  button : {
    margin : 20
  }
  
 
})

