import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and cheese",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/meat-lasagna-picture-id543663322?k=20&m=543663322&s=612x612&w=0&h=TzVt9HU-P_Yc-1Z4UUxPrdSAs62eL12j-z3QicA8CGc=",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin Chicken",
    price: "$19.20",
    image:
      "https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sause ",
    price: "$14.50",
    image:
      "https://assets.epicurious.com/photos/5a9ecb6a9d7f7965083147b4/4:3/w_4444,h_3333,c_limit/eggshop-chilaquiles-recipe-HC-030618.jpg",
  },
  {
    title: "Chicken Ceasar Salad",
    description: "Healthy and it tastes even better!",
    price: "$14.50",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg",
  },
];

const styles = StyleSheet.create({
  MenuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.MenuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
