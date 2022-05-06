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
    <ScrollView
      contentContainerStyle={globalStyles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={globalStyles.profileWrapper}>
        <View style={globalStyles.profileInfoWrap}>
          <Image style={globalStyles.profileImage} source={{ uri: avatar }} />
          <View style={globalStyles.infoWrap}>
            <Text style={globalStyles.profilePageText}>
              Full name: {first_name} {last_name}
            </Text>
            <Text style={globalStyles.profilePageText}>Email: {email}</Text>
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
    </ScrollView>
  );
}

export default ProfilePage;
