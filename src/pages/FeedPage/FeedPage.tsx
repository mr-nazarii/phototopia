import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import PhotoElement from "../../components/PhotoElement";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchImages } from "../../store/reducers/ActionCreators";
import { colorVariables } from "../../utils/colors";
import { globalStyles } from "../../utils/globalStyles";

function FeedPage() {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      url: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
      author: "Laaa",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      url: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
      author: "Laaa",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      url: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
      author: "Laaa",
    },
    {
      id: "-145571e29d72",
      url: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
      author: "Laaa",
    },
    {
      id: "-1571e29d72",
      url: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
      author: "Laaa",
    },
  ];

  const images = useAppSelector((state) => state.images);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <>
      <FlatList
        data={DATA}
        numColumns={1}
        renderItem={({ item }) => (
          <PhotoElement uri={item.url} author={item.author} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            tintColor={colorVariables.backgroundMain}
            onRefresh={onRefresh}
          />
        }
      >
        {/* https://picsum.photos/300/200 */}
      </FlatList>
    </>
  );
}

export default FeedPage;
