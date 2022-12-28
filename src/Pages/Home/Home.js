import React, { Fragment, useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import api from "../../Config/api";
import styles from "./styles";

export function Home() {
  const cityState = {
    type: "Urbano",
    way: [
      {
        dist_max: "",
        dist_min: "",
        direction: "Selecione o sentido da faixa",
      },
    ],
    time_zone: -3,
    street: "",
    num: "",
    district: "",
    city: "",
    uf: "",
    cep: "",
    latitude: "",
    longitude: "",
    complement: "",
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [newlocal, setNewLocal] = useState([]);
  const [local, setLocal] = useState(cityState);
  const [localToEdit, setLocalToEdit] = useState(cityState);
  async function fetchDataHome() {
    await api.getLocations().then((res) => {
      setLocal(res.data);
    });
  }

  useEffect(() => {
    fetchDataHome();
  }, []);

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-evenly",
          }}
        >
          <TextInput
            style={{
              height: 40,
              width: 300,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
            onChangeText={(text) =>
              setNewLocal((preValues) => ({
                ...preValues,
                street: text,
              }))
            }
            value={newlocal.street}
          />
          <Pressable
            style={{ padding: 20, backgroundColor: "#397b34" }}
            onPress={() => {
              api.postLocal(newlocal).then(() => {
                fetchDataHome();
              }), setNewLocal("")
            }}
          >
            <Text style={{ color: "#fff" }}>Nova localização</Text>
          </Pressable>
        </View>
        {local != null ? (
          <FlatList
            data={local}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    padding: 15,
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text style={{ width: "50%" }}>{item.street}</Text>
                  <Pressable
                    style={{ padding: 20, backgroundColor: "#173353" }}
                    onPress={() => {
                      setModalVisible(true);
                      api.getLocationsToEdit(item.id).then((res) => {
                        setLocalToEdit(res.data);
                      });
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Editar</Text>
                  </Pressable>
                  <Pressable
                    style={{ padding: 20, backgroundColor: "#c61b1b" }}
                    onPress={() => {
                      api.deleteLocal(item.id).then(() => {
                        fetchDataHome();
                      });
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Deletar</Text>
                  </Pressable>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View />
        )}
      </SafeAreaView>
      {/* Modal */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  padding: 15,
                  justifyContent: "space-evenly",
                }}
              >
                <Text>Editar</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text>Fechar</Text>
                </Pressable>
              </View>
              <TextInput
                style={{
                  height: 40,
                  width: 300,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                }}
                onChangeText={(text) =>
                  setLocalToEdit((preValues) => ({
                    ...preValues,
                    street: text,
                  }))
                }
                value={localToEdit.street}
              />
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  padding: 15,
                  justifyContent: "space-evenly",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    api.putLocal(localToEdit.id, localToEdit), fetchDataHome();
                  }}
                >
                  <Text>Salvar</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text>Cancelar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </Fragment>
  );
}
