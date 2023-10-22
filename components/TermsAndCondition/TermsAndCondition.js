import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function TermsAndCondition() {
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
        <View style={{ paddingHorizontal: 10, paddingBottom: 100 }}>
          <View>
            <Text style={styles.termsAndConditonText}>
              Terms and Conditions
            </Text>
          </View>
          <View>
            <Text>
              These Terms and Conditions ("Terms") govern your use of the
              coupon-sharing application “
              <Text style={styles.boldText}>Mena Coupon</Text>” operated by{" "}
              <Text style={styles.boldText}>Expert Squd</Text>. By using the
              Application, you agree to abide by these Terms. Please read these
              Terms carefully before using the Application
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>1. Acceptance of Terms</Text>
            <Text>
              By accessing or using the Application, you acknowledge that you
              have read, understood, and agree to be bound by these Terms. If
              you do not agree to these Terms, you must not use the Application.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>2. Eligibility</Text>
            <Text>
              The Application is open to users of all ages and has no age
              restrictions. Everyone is welcome to use the Application. However,
              if you are under 18, we recommend that you use the Application
              with the involvement and consent of a parent or guardian. It is
              important for all users, regardless of age, to comply with these
              Terms and to use the Application responsibly.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>3. Use of the Application</Text>
            <Text>
              <Text style={styles.stepThreeInnerText}>
                3.1. Coupon Sharing:
              </Text>
              The Application allows users to share coupon codes, deals,
              Vouchers, and promo codes. You agree to use this feature
              responsibly and only share accurate and valid codes.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.stepThreeInnerText}>
              3.2. Regional Restrictions:
            </Text>
            <Text>
              The Application is intended for use in Saudi Arabia, the United
              Arab Emirates, Egypt, Oman, Qatar, Kuwait, and Bahrain. You must
              ensure that your use complies with local laws and regulations in
              your country.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>4. Privacy</Text>
            <Text>
              We take your privacy seriously. Our Privacy Policy outlines how we
              collect, use, and share your personal information. By using the
              Application, you agree to the terms of our Privacy Policy.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>5. User Content</Text>
            <Text>
              You are responsible for any content you share through the
              Application. This includes coupon codes, deals, and promo codes.
              You must ensure that your content does not violate any laws or
              infringe upon the rights of others.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>6. Prohibited Activities</Text>
            <Text>
              You are prohibited from:{`\n`}
              6.1. Violating any applicable laws or regulations.{`\n`} 6.2.
              Impersonating any individual or entity.{`\n`} 6.3. Attempting to
              gain unauthorized access to the Application's servers or networks.
              {`\n`}
              6.4. Engaging in any activity that disrupts or interferes with the
              proper operation of the Application.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>7. Intellectual Property</Text>
            <Text>
              All content on the Application, including text, graphics, logos,
              and other materials, are the property of Mena Coupon or its
              licensors. You are not permitted to use this content for any
              purpose without explicit permission.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>8. Termination</Text>
            <Text>
              We reserve the right to terminate or suspend your access to the
              Application at our discretion, with or without notice. You may
              also terminate your use of the Application at any time. Upon
              termination, you must cease using the Application, and these Terms
              will remain in effect.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>9. Disclaimers</Text>
            <Text>
              The Application is provided "as is" and "as available" without any
              warranties. We do not guarantee that the Application will be
              error-free, secure, or uninterrupted.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>10. Limitation of Liability</Text>
            <Text>
              In no event shall Mena Coupon be liable for any indirect, special,
              incidental, consequential, or punitive damages, including but not
              limited to loss of profits, data, use, or other intangible losses.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>11. Changes to Terms</Text>
            <Text>
              We reserve the right to modify these Terms at any time. Your
              continued use of the Application after changes are made
              constitutes your acceptance of the modified Terms.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>12. Contact Information</Text>
            <Text style={{ marginBottom: 20 }}>
              If you have any questions or concerns about these Terms, please
              contact us at{" "}
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
              </TouchableOpacity>
            </Text>
            <Text>
              By using the Application, you agree to these Terms and Conditions.
              These Terms constitute the entire agreement between you and Mena
              Coupon regarding your use of the Application. If any part of these
              Terms is found to be invalid or unenforceable, it will not affect
              the validity and enforceability of the remaining provisions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textBox: {
    marginVertical: 8,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "600",
  },
  termsAndConditonText: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  stepThreeInnerText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
