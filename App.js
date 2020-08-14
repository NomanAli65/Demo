import React,{ Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";

const Stack=createStackNavigator();

const DashStack=()=>(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details}
    options={{
      headerShown:false
    }}
     />
  </Stack.Navigator>
)


const App=()=>{
  return(
    <NavigationContainer>
      <DashStack/>
    </NavigationContainer>
  )
}

export default App;