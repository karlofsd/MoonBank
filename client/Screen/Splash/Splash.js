import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button, 
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useSelector } from "react-redux";
import style from "./SplashStyle";
import { ActivityIndicator } from "react-native-paper";

const Splash = ({ navigation, route }) => {
  const [usuario, setUsuario] = useState(false);
  const [huella, setHuella] = useState(false);
  const { primary, secondary, text, bg } = useSelector((store) => store.color);

  const storageAsync = async () => {
    const clave = await AsyncStorage.getItem("Metodo");

    if (clave !== null) {
      setUsuario(true);
      if (clave === "huella") {
        setHuella(true);
      }
    } else if (route.params.usuario2 === false) {
      setUsuario(false);
    } else {
      setUsuario(false);
    }
  };
  useEffect(() => {
    storageAsync();
    if (
      !usuario ||
      route.params.usuario2 === false ||
      route.params.usuario3 === false
    ) {
      setTimeout(() => {
        navigation.navigate("Login");
      }, 2000);
    } else if (usuario) {
      if (huella) {
        setTimeout(() => {
          navigation.navigate("Huella");
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.navigate("Pin");
        }, 2000);
      }
    }
  }, [usuario, huella, route.params.usuario2, route.params.usuario3]);

  return (
    <View style={[{ backgroundColor: primary }, style.container]}>
      <View style={style.logo}>
        <Text source={{color: '#1C2383', fontsize: 150 }} >Bienvenido</Text>
      </View>
      <ActivityIndicator color={bg} size="large" />
    </View>
  );
};

export default Splash;
