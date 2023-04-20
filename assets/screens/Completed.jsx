import {
  SafeAreaView,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
// import Translate from "./assets/screens/Translate";
import Icon from "react-native-vector-icons/Ionicons";

export default function Completed() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: "rgba(40, 42, 49, 1)",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: -0.408,
          }}
        >
          Completed
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "rgba(40, 42, 49, 0.6)",
            letterSpacing: -0.408,
          }}
        >
          100$ → Aleksander Dmitrievich V.
        </Text>
      </View>
      <ScrollView style={styles.content}>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <View
                style={{
                  width: 36,
                  backgroundColor: "#F3F6FA",
                  height: 36,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="ios-information"
                  size={20}
                  color={"rgba(61, 112, 255, 1)"}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "#282A31",
                }}
              >
                Operation details
              </Text>
              <Icon name="md-chevron-up" />
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "rgba(40, 42, 49, 0.2)",
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingBottom: 8,
                }}
              >
                Withdrawal account
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextInput placeholder="Salary card" />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="card-outline" size={20} color={"#3D70FF"} />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      letterSpacing: -0.408,
                      color: "rgba(40, 42, 49, 0.6)",
                      paddingLeft: 10,
                    }}
                  >
                    · 3040
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Name of the recipient{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="Alexander Dmitrievich V."
              />
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Recipient's phone{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="+995 559 72 88"
              />
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Transfer amount{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="100$"
              />
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Operation number{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="2669708927"
              />
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Date{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="2669708927"
              />
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Date{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="2669708927"
              />
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Date{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="2669708927"
              />
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: -0.408,
                  color: "rgba(40, 42, 49, 0.6)",
                  paddingTop: 12,
                }}
              >
                Date{" "}
              </Text>
              <TextInput
                placeholderTextColor="#282A31"
                style={{
                  paddingVertical: 20,
                  fontSize: 16,
                }}
                placeholder="2669708927"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F3F6FA",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    backgroundColor: "#F3F6FA",
  },
  content: {
    borderRadius: 12,
    height: "70%",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  footer: {
    height: "20%",
  
  },
});
