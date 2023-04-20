import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-outline" size={25} color="rgba(40, 42, 49, 1)" />
        <Text
          style={{
            fontSize: 17,
            fontWeight: 600,
            paddingLeft: 130,
            lineHeight: 24,

            textAlign: "center",
          }}
        >
          Translate
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.fileCard}>
          <View
            style={{
              position: "absolute",
              top: 20,
              left: 20,
            }}
          >
            <Text
              style={{
                color: "rgba(0, 99, 255, 1)",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              Salary card
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              10,000$
            </Text>
            <Text
              style={{
                color: "#3D70FF",
                fontSize: 30,
                fontStyle: "italic",
                fontWeight: 800,
                top: 70,
              }}
            >
              Visa
            </Text>
            <View
              style={{
                left: 190,
              }}
            >
              <Text
                style={{
                  left: 80,
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: 16,
                  lineHeight: 16,
                  paddingBottom: 20,
                  fontWeight: 400,
                }}
              >
                ••/••
              </Text>

              <Text
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 16,
                }}
              >
                •••• •••• •••• 3040
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 24,
              marginTop: 5,
              backgroundColor: "#3D70FF",
              marginRight: 5,
            }}
          ></View>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 24,
              marginTop: 5,
              backgroundColor: "#D9D9D9",
              marginRight: 5,
            }}
          ></View>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 24,
              marginTop: 5,
              backgroundColor: "#D9D9D9",
              marginRight: 5,
            }}
          ></View>
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 24,
              marginTop: 5,
              backgroundColor: "#D9D9D9",
            }}
          ></View>
        </View>
      </View>
      <View style={styles.form}>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "rgba(40, 42, 49, 0.2)",
            }}
          >
            <Text
              style={{
                fontWeight: 400,
                color: "#282A31",
                fontSize: 13,
                opacity: 0.6,
              }}
            >
              Aleksandr
            </Text>
            <TextInput
              placeholderTextColor="#282A31"
              style={{
                fontSize: 16,
                textColor: "red",
                paddingBottom: 10,
              }}
              placeholder="+995 559 72 88"
            />
          </View>
          <View
            style={{
              paddingTop: 12,
              borderBottomWidth: 2,
              borderBottomColor: "rgba(40, 42, 49, 0.2)",
            }}
          >
            <Text
              style={{
                color: "#282A31",
                opacity: 0.6,
              }}
            >
              Sum
            </Text>
            <TextInput
              style={{ fontSize: 16 }}
              placeholder="from 10$ to 99 999$"
            />
          </View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: "#282A31",
              letterSpacing: -0.408,
              opacity: 0.3,
              paddingTop: 8,
            }}
          >
            Commission is not charged by the bank
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 32,
          }}
        >
          <TextInput
            placeholderTextColor="rgba(40, 42, 49, 0.3)"
            style={{
              width: 343,
              fontSize: 13,
              height: 82,
              backgroundColor: "#F3F6FA",
              borderRadius: 12,
              // paddingTop: 12,
              paddingLeft: 12,
            }}
            placeholder="Message to the recipient"
          />
        </View>
        <Pressable
          style={{
            backgroundColor: "rgba(61, 112, 255, 0.7)",
            justifyContent: "center",
            paddingVertical: 26,
            marginHorizontal: 16,
            marginTop: 12,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              fontWeight: 600,
            }}
          >
            Translate
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
  header: {
    flex: 10,
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    paddingLeft: 10,
  },
  card: {
    flex: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  fileCard: {
    height: 193,
    position: "relative",
    width: 343,
    backgroundColor: "#49B1FF",

    borderRadius: 12,
  },
  form: {
    flex: 60,
    paddingTop: 32,
  },
});
