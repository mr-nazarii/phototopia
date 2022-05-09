import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchUsers } from "../../store/reducers/ActionCreators";
import { profileLogedToggle } from "../../store/reducers/profileSlice";
import { colorVariables } from "../../utils/colors";
import { globalStyles } from "../../utils/globalStyles";

function ProfilePage() {
  const [refreshing, setRefreshing] = useState(false);
  const { first_name, last_name, email, avatar, id } = useAppSelector(
    (state) => state.user
  );
  const defaultImage =
    "https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg";
  const dispatch = useAppDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={globalStyles.profileWrapper}>
      <View style={globalStyles.profileInfoWrap}>
        <Image
          style={globalStyles.profileImage}
          source={{
            uri: avatar ? avatar : defaultImage,
          }}
        />
        <View style={globalStyles.infoWrap}>
          <Text style={globalStyles.profilePageText}>
            {first_name} {last_name}
          </Text>
          <Text style={globalStyles.profilePageSecondaryText}>{email}</Text>
        </View>
      </View>
      <TouchableHighlight
        underlayColor={colorVariables.headerMain}
        style={globalStyles.profileSignoutButton}
        onPress={() => dispatch(profileLogedToggle())}
      >
        <Text style={globalStyles.profilePageText}>LogOut</Text>
      </TouchableHighlight>
    </View>
  );
}

export default ProfilePage;
