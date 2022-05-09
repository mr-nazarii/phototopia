import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import PhotoElement from "../../components/PhotoElement";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  fetchImages,
  fetchNewImages,
} from "../../store/reducers/ActionCreators";
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
  let page = 1;
  const images = useAppSelector((state) => state.images.images);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const onRefresh = useCallback(() => {
    page = randomIntFromInterval(1, 40);
    dispatch(fetchImages(page));

    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  useEffect(() => {
    dispatch(fetchImages(page));
  }, [page]);

  return (
    <>
      <FlatList
        data={images}
        numColumns={1}
        renderItem={({ item }) => (
          <PhotoElement uri={item.download_url} author={item.author} />
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
        onEndReached={() => {
          page = randomIntFromInterval(1, 40);

          dispatch(fetchNewImages(page));
        }}
        onEndReachedThreshold={0.1}
      ></FlatList>
    </>
  );
}

export default FeedPage;
