import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Performed() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
          }}
        >
          <View
            style={{
              width: 78,
              height: 78,
              backgroundColor: "#53B052",
              borderRadius: 100,
            }}
          >
            <Icon
              style={{
                textAlign: "center",
                paddingTop: 20,
              }}
              name="checkmark-outline"
              size={30}
              color="rgba(255, 255, 255, 1)"
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 24,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: 600,

              color: "#282A31",
              lineHeight: 24,
              letterSpacing: -0.408,
            }}
          >
            Aleksander Dmitrievich V.
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: "#282A31",
              fontWeight: 900,
              letterSpacing: -0.408,
              paddingTop: 12,
            }}
          >
            100$
          </Text>
          <Text
            style={{
              paddingTop: 12,

              color: "rgba(40, 42, 49, 1, 0.6)",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: -0.408,
            }}
          >
            No commission
          </Text>
          <Text
            style={{
              paddingTop: 4,
              color: "rgba(40, 42, 49, 1, 0.6)",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: -0.408,
            }}
          >
            Completed, 12 September 16:00
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View
          style={{
            width: 106,
            height: 108,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              backgroundColor: "#3D70FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="ios-calendar" size={20} color={"white"} />
          </View>
          <Text
            style={{
              fontSize: 13,
              color: "rgba(40, 42, 49, 0.6)",
              letterSpacing: -0.408,
              fontWeight: 400,
            }}
          >
            Open receipt
          </Text>
        </View>
        <View
          style={{
            width: 106,
            height: 108,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              backgroundColor: "#3D70FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="md-reload-outline" size={20} color={"white"} />
          </View>
          <Text
            style={{
              fontSize: 13,
              color: "rgba(40, 42, 49, 0.6)",
              letterSpacing: -0.408,
              fontWeight: 400,
            }}
          >
            Repeat payment
          </Text>
        </View>
        <View
          style={{
            width: 106,
            height: 108,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              backgroundColor: "#3D70FF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="md-star-outline" size={20} color={"white"} />
          </View>
          <Text
            style={{
              fontSize: 13,
              color: "rgba(40, 42, 49, 0.6)",
              letterSpacing: -0.408,
              fontWeight: 400,
            }}
          >
            Create sample
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
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
              paddingTop : 12,
            }}
          >
            Name of the recipient{" "}
          </Text>
          <TextInput
            placeholderTextColor="#282A31"
            style={{
              paddingVertical : 25,
              fontSize: 16,
            }}
            placeholder="Alexander Dmitrievich V."
          />
        </View>
        <Pressable
          style={{
            backgroundColor: "rgba(61, 112, 255, 1)",
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
            To Main
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "40%",
    paddingTop: 40,
  },
  content: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexDirection: "row",
  },
  footer: {
    height: "40%",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
