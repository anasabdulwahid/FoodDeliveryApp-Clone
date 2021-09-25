import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 800,
    rating: 4.7,
  },

  {
    name: "Benihana",
    image_url:
      "https://www.dexigner.com/images/article/60758/Benihana_Glasgow_04.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.3,
  },
  {
    name: "India's Grill",
    image_url:
      "https://media-cdn.tripadvisor.com/media/photo-s/0b/ef/2e/67/india-s-grill-kennedy.jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];
export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginbottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 15, color: "grey" }}> 30-45 * min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
