import React from "react";
import { View, Text, Image } from "react-native";

const image = "https://wallpaperaccess.com/full/3692584.jpg";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai * Comfort Food * $$ * :ticket * 4 :star (2913+)";

export default function About() {
  return (
    <View>
      <ReastaurantImage image={image} />
      <RestaurantTitle title={title} />
      <ReastaurantDescription description={description}/> 
    </View>
  );
}

const ReastaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) =>(
 <Text style={{ 
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10, 
        marginHorizontal: 15,
        
    }}>{props.title}</Text>
);

const ReastaurantDescription= (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
        }}>{props.description}</Text>
)
