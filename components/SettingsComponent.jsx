import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Switch,
  TouchableOpacity,
  Dimensions,
  Modal,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"; // Importing FontAwesome5 for circled 'i' icon and email icon
import FontAwesome from "react-native-vector-icons/FontAwesome"; // For Discord icon

const backgroundImage = require("../assets/images/v57_293.png");
const { width } = Dimensions.get("window");
const baseFontSize = width * 0.03;

const SettingsComponent = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false); // State for notifications
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  // Function to handle opening modal with content
  const openModal = (type) => {
    if (type === "HELP") {
      setModalTitle("HELP");
      setModalContent([
        <TouchableOpacity
          key="email"
          onPress={() => Linking.openURL("mailto:helpatenajewelry@gmail.com")}
          style={styles.contactRow}
        >
          <Icon name="envelope" size={20} color="#000" />
          <Text style={styles.contactText}>helpatenajewelry@gmail.com</Text>
        </TouchableOpacity>,

        <TouchableOpacity
          key="discord"
          onPress={() =>
            Linking.openURL("https://discord.gg/D2d7p8PTAE")
          }
          style={styles.contactRow}
        >
          <Icon name="discord" size={20} color="#7289DA" />
          <Text style={styles.contactText}>Join us on Discord</Text>
        </TouchableOpacity>,
      ]);
    }
    setModalVisible(true);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
      blurRadius={3}
    >
      <View style={styles.pageContentContainer}>
        <View style={styles.pageContentContainerFrame}>
          {/* Notifications Toggle Button */}
          <View style={styles.notificationsContainer}>
            <Text style={styles.label}>Enable Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={(value) => setNotificationsEnabled(value)}
              trackColor={{ false: "#767577", true: "#00CC66" }}
              thumbColor={notificationsEnabled ? "#FFFFFF" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
            />
          </View>

          {/* Help Section with 'i' Icon */}
          <View style={styles.notificationsContainer}>
            <Text style={styles.label}>Help</Text>
            <TouchableOpacity onPress={() => openModal("HELP")}>
              <Icon name="info-circle" size={25} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal for T&C and FQ */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            {/* Wrap modalContent in a View */}
            <View>{modalContent}</View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  notificationsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  pageContentContainerFrame: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#4E4E4E",
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 5,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  pageContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageContent: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: baseFontSize * 1.5,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: baseFontSize,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#00CC66",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  contactText: {
    fontSize: baseFontSize,
    marginLeft: 10,
  },
});

export default SettingsComponent;
