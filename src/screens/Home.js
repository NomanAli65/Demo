import React,{ Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";


class Home extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                <Text style={{margin:10}}>This is home screen</Text>
                <Button 
                onPress={()=>this.props.navigation.navigate("Details")}
                mode="contained">
                    Profile
                </Button>
            </View>
            </View>
        );
    }
}

export default Home;