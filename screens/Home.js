import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

const YELP_API_KEY =
  "qWSBVbGS5Ni5DQlzCq1exTJpKjLVi8xHUWnZiCXX_iGrk9UU_yx-OnJ70kat9-Wd1QJjaD02BsIvEgSzZhGH8raBmOcrrqH0Sy0Djklo4bYLwwhEIq8WWUCLaKtKYXYx";

export default function Home(props) {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Fransico");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setrestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
