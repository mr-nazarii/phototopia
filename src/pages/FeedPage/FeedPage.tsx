import React, { useCallback, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import PhotoElement from "../../components/PhotoElement";
import { colorVariables } from "../../utils/colors";
import { globalStyles } from "../../utils/globalStyles";

function FeedPage() {
  const [refreshing, setRefreshing] = useState(false);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      uri: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      uri: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      uri: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
    },
    {
      id: "-145571e29d72",
      uri: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
    },
    {
      id: "-1571e29d72",
      uri: "https://i.picsum.photos/id/1041/300/300.jpg?hmac=PosL0KGsFiR_uaOxVY5r9pvWRIyIpn07BSV53jT6We0",
    },
  ];

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <>
      <FlatList
        data={DATA}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={{ width: "90%" }}>
            <PhotoElement uri={item.uri} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* https://picsum.photos/300/200 */}
      </FlatList>
    </>
  );
}

export default FeedPage;
