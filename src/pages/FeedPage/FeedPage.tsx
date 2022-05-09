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
import { randomInt } from "../../utils/randomInt";

function FeedPage() {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const usedPages: any[] = [];
  let page = 1;
  const images = useAppSelector((state) => state.images.images);

  const onRefresh = useCallback(() => {
    page = randomInt(1, 40);
    dispatch(fetchImages(page));

    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  useEffect(() => {
    page = randomInt(1, 40);
    usedPages.push(page);
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
          while (true) {
            page = randomInt(1, 40);

            if (!usedPages.includes(page)) {
              usedPages.push(page);
              dispatch(fetchNewImages(page));
              break;
            }
            continue;
          }
        }}
        onEndReachedThreshold={0.1}
      ></FlatList>
    </>
  );
}

export default FeedPage;
