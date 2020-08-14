import React,{ Component } from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Title, IconButton } from "react-native-paper";
import { FontAwesome5,Octicons } from "@expo/vector-icons"; 

class Details extends Component {
    state = { 
        RecentPhotos:[
            {image:require("../../assets/p1.jpg")},
            {image:require("../../assets/p2.jpg")},
            {image:require("../../assets/p3.jpg")},
            {image:require("../../assets/p4.jpg")},
            {image:require("../../assets/p5.jpg")},
            {image:require("../../assets/p6.jpg")}
        ]
     }


    render() {
        return (
            <View style={{flex:1,backgroundColor:"#fff"}}>
            <StatusBar animated backgroundColor="transparent" translucent style="light"/>
            <View style={{flex:1,backgroundColor:"red"}}>
            <Image style={{resizeMode:"cover",width:"100%",height:"100%"}} source={require("../../assets/cover.jpg")}/>
            </View>
            <View style={styles.detailContainer}>
                <Title style={{fontSize:25}}><Title style={{fontWeight:"bold",fontSize:25}}>Anna</Title> 19</Title>
                <View style={{flexDirection:"row"}}>
                <FontAwesome5 name="user-graduate" size={15} color="#5c5c5c" />
                <Text style={styles.info}>University of San Francisco</Text>
                </View>
                <View style={{flexDirection:"row",paddingVertical:5}}>
                <FontAwesome5 name="map-marker-alt" size={15} color="#5c5c5c" />
                <Text style={styles.info}>1 mile away</Text>
                </View>
            </View>
            <View style={styles.detailContainer}>
            <Text style={[styles.info,{marginStart:0,fontSize:15}]}>Moved from the east cost & just want meet some new people</Text>
            </View>
            <View  style={{flex:1}}>
            <View style={{paddingHorizontal:20,paddingVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
            <Title style={{fontSize:18,fontWeight:"bold"}}>Recent Instagram photos</Title>
            <View style={{flexDirection:"row"}}>
            <Octicons name="primitive-dot" size={20} color="#ff1288" />
            <View style={{width:10}}/>
            <Octicons name="primitive-dot" size={20} color="#ccc" />
            </View>
            </View>
            <View style={{flexDirection:"row",flex:1,flexWrap:"wrap",justifyContent:"center"}}>
            {
                this.state.RecentPhotos.map((photo)=>(
                    <View style={{marginHorizontal:3,marginVertical:5,width:"30%",height:"48%",borderRadius:20,overflow:"hidden"}}>
                    <Image source={photo.image} style={{resizeMode:"stretch",width:"100%",height:"100%"}}/>
                    </View>
                ))
            }
            </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <IconButton icon="close" style={{backgroundColor:"#fff",elevation:2}} color="#ff1288" size={40} />
            <IconButton icon="star" style={{backgroundColor:"#fff",elevation:2}} color="#329cc9" size={28} />
            <IconButton icon="heart" style={{backgroundColor:"#fff",elevation:2}} color="#55c976" size={40} />
            </View>
            </View>
        );
    }
}

export default Details;



const styles=StyleSheet.create({
    info:{
        color:"#5c5c5c",
        marginStart:10
    },
    detailContainer:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderBottomColor:"#eee",
        borderBottomWidth:1
    }
})