import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function PrivacyPolicy() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.goBack()}
          >
            <Svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <G clip-path="url(#clip0_106_1830)">
                <Path
                  d="M12.5 5L7.5 10L12.5 15"
                  stroke="black"
                  stroke-width="0.833333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_106_1830">
                  <Rect width="20" height="20" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider />
      <ScrollView>
        <View style={{ paddingHorizontal: 10, flex: 1, paddingBottom: 100 }}>
          <View>
            <Text
              style={{ fontSize: 24, fontWeight: "600", marginVertical: 10 }}
            >
              Privacy Policy for Mena Coupon
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text>
              Mena Coupon is dedicated to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy
              outlines our practices concerning the collection, use, and
              disclosure of personal data when you use our Android application,
              Mena Coupon, and our website. By downloading and using our
              application, you consent to the terms described in this Privacy
              Policy.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.h1}>1.Information We Collect</Text>
            <Text>
              1.1. Personal Information We may collect and process the following
              personal information:
            </Text>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ marginLeft: 20 }}>
                <Text style={[styles.h2]}>User account details: </Text>
                When you create an account, we may collect your name, email
                address, and password
              </Text>
              <Text style={{ marginLeft: 20 }}>
                <Text style={styles.h2}>Profile information: </Text>
                When you create an account, we may collect your name, email
                address, and password
              </Text>
              <Text style={{ marginLeft: 20 }}>
                <Text style={styles.h2}>Coupon and deal preferences: </Text>
                When you create an account, we may collect your name, email
                address, and password
              </Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.h2}>1.2. Usage Information</Text>
            <Text>
              We collect data regarding your interaction with our application,
              such as:
            </Text>
            <View>
              <Text>Coupons and deals viewed or shared.</Text>
              <Text>Application features and pages visited.</Text>
              <Text>
                Device information, including device type, operating system, and
                unique identifiers.{" "}
              </Text>
              <Text>
                Log data, including IP address, date and time of access, and
                more.
              </Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.h2}>1.3. Location Information</Text>
            <Text>
              With your consent, we may access your device's location
              information to offer localized deals and coupons.
            </Text>
          </View>
          <View>
            <Text style={styles.h1}>2.How We Use Your Information</Text>
            <Text>
              We use the collected data for various purposes, including but not
              limited to:
            </Text>
            <Text>
              Providing, maintaining, and improving our application and
              services.{`\n`} Offering personalized deals and coupons based on
              your preferences.{`\n`} Communicating with you, including sending
              updates and notifications.{`\n`} Analyzing user behavior to
              enhance the user experience.{`\n`} Ensuring compliance with
              applicable laws and regulations.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.h1}>3.Data Sharing</Text>
            <Text>
              We may share your personal information in the following
              circumstances:
            </Text>
            <Text>
              With third-party service providers to help us with application
              functionality, analytics, and marketing.{`\n`} In response to
              legal requests or to protect our rights, privacy, safety, and
              property.{`\n`} In connection with a merger, sale, or other
              business transaction.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.h1}>4.Your Choices</Text>
            <View style={{ marginLeft: 20 }}>
              <Text style={[styles.h2]}>4.1. Account Information</Text>
              <Text>
                You can update or delete your account information at any time.
                Please contact our support team for assistance.
              </Text>
              <Text style={styles.h2}>4.2. Communication Preferences </Text>
              <Text>
                You can manage your communication preferences, such as email
                notifications, through the application settings.
              </Text>
              <Text style={styles.h2}>4.3. Location Data</Text>
              <Text>
                You can enable or disable location services on your device and
                modify location preferences in the app settings.
              </Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.h1}>5.Security</Text>
            <Text>
              We take data security seriously and employ measures to protect
              your information from unauthorized access, alteration, or
              disclosure. However, no method of data transmission over the
              internet or electronic storage is completely secure. Therefore, we
              cannot guarantee absolute security.
            </Text>
          </View>
          <View>
            <Text style={styles.h1}>6.Changes to this Privacy Policy</Text>
            <Text>
              We may revise this Privacy Policy from time to time. The "Last
              Updated" date at the top of this page will indicate when the
              policy was last updated. We encourage you to review this Privacy
              Policy periodically for any changes.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.h1}>7.Contact Us</Text>
            <Text>
              If you have questions or concerns regarding this Privacy Policy,
              please contact us at{" "}
              <TouchableOpacity
                onPress={() => Linking.openURL("mailto:hello@menacoupon.com")}
              >
                <Text
                  style={{
                    color: "blue",
                    borderBottomColor: "blue",
                    borderBottomWidth: 1,
                    fontSize: 14,
                  }}
                >
                  hello@menacoupon.com
                </Text>
              </TouchableOpacity>{" "}
              Your privacy is important to us. We will make reasonable efforts
              to address your concerns and resolve any issues promptly. Thank
              you for choosing Mena Coupon! {`\n`}Please note that this is a
              template and should be customized to suit your specific
              application and legal requirements. It is strongly recommended
              that you seek legal counsel to ensure compliance with applicable
              laws and regulations.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 16,
    fontWeight: "600",
  },
  h2: {
    fontSize: 15,
    fontWeight: "600",
  },
  normalBoldText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  textBox: {
    marginVertical: 10,
  },
});
