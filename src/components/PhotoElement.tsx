import React from "react";
import { Image, Text, View } from "react-native";
import { globalStyles } from "../utils/globalStyles";

const PhotoElement = ({ uri }: any) => {
  return (
    <View style={globalStyles.imageWrap}>
      <Image
        style={globalStyles.image}
        source={{
          uri: "https://i.picsum.photos/id/860/300/200.jpg?hmac=mT3PpBeN50-PBd_KcWUcc3wuX5J6QPAI1k4AZ8IMSfk",
        }}
      />
      <View style={globalStyles.imageAuthor}>
        <Text style={globalStyles.profilePageText}>Kusi Rusi</Text>
      </View>
    </View>
  );
};

export default PhotoElement;
