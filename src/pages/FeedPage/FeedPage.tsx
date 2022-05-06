import React, { useCallback, useState } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import { globalStyles } from "../../utils/globalStyles";

function FeedPage() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    ></ScrollView>
  );
}

export default FeedPage;
