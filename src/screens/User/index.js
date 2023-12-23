// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   TextInput,
//   Modal,
// } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import * as ImagePicker from "expo-image-picker";
// import { COLORS, FONTS } from "../../../constants";
// import { MaterialIcons } from "@expo/vector-icons";
// import { imagesDataURL } from "../../../constants/data";
// import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

// const User = ({ navigation }) => {
//   const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
//   const [name, setName] = useState("Melissa Peters");
//   const [email, setEmail] = useState("metperters@gmail.com");
//   const [password, setPassword] = useState("randompassword");
//   const [country, setCountry] = useState("Nigeria");

//   const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
//   const today = new Date();
//   const startDate = getFormatedDate(
//     today.setDate(today.getDate() + 1),
//     "YYYY/MM/DD"
//   );
//   const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
//   const [startedDate, setStartedDate] = useState("12/12/2023");

//   const handleChangeStartDate = (propDate) => {
//     setStartedDate(propDate);
//   };

//   const handleOnPressStartDate = () => {
//     setOpenStartDatePicker(!openStartDatePicker);
//   };

//   const handleImageSelection = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 4],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//   };

//   function renderDatePicker() {
//     return (
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={openStartDatePicker}
//       >
//         <View
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <View
//             style={{
//               margin: 20,
//               backgroundColor: COLORS.primary,
//               alignItems: "center",
//               justifyContent: "center",
//               borderRadius: 20,
//               padding: 35,
//               width: "90%",
//               shadowColor: "#000",
//               shadowOffset: {
//                 width: 0,
//                 height: 2,
//               },
//               shadowOpacity: 0.25,
//               shadowRadius: 4,
//               elevation: 5,
//             }}
//           >
//             <DatePicker
//               mode="calendar"
//               minimumDate={startDate}
//               selected={startedDate}
//               onDateChanged={handleChangeStartDate}
//               onSelectedChange={(date) => setSelectedStartDate(date)}
//               options={{
//                 backgroundColor: COLORS.primary,
//                 textHeaderColor: "#469ab6",
//                 textDefaultColor: COLORS.white,
//                 selectedTextColor: COLORS.white,
//                 mainColor: "#469ab6",
//                 textSecondaryColor: COLORS.white,
//                 borderColor: "rgba(122,146,165,0.1)",
//               }}
//             />

//             <TouchableOpacity onPress={handleOnPressStartDate}>
//               <Text style={{ color: COLORS.white }}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     );
//   }

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: COLORS.white,
//         paddingHorizontal: 22,
//       }}
//     >
//       <View
//         style={{
//           marginHorizontal: 12,
//           flexDirection: "row",
//           justifyContent: "center",
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={{
//             position: "absolute",
//             left: 0,
//           }}
//         >
//           <MaterialIcons
//             name="keyboard-arrow-left"
//             size={24}
//             color={COLORS.black}
//           />
//         </TouchableOpacity>

//         <Text style={{}}>Edit Profile</Text>
//       </View>

//       <ScrollView>
//         <View
//           style={{
//             alignItems: "center",
//             marginVertical: 22,
//           }}
//         >
//           <TouchableOpacity onPress={handleImageSelection}>
//             <Image
//               source={{ uri: selectedImage }}
//               style={{
//                 height: 170,
//                 width: 170,
//                 borderRadius: 85,
//                 borderWidth: 2,
//                 borderColor: COLORS.primary,
//               }}
//             />

//             <View
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 right: 10,
//                 zIndex: 9999,
//               }}
//             >
//               <MaterialIcons
//                 name="photo-camera"
//                 size={32}
//                 color={COLORS.primary}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View>
//           <View
//             style={{
//               flexDirection: "column",
//               marginBottom: 6,
//             }}
//           >
//             <Text style={{ }}>Name</Text>
//             <View
//               style={{
//                 height: 44,
//                 width: "100%",
//                 borderColor: COLORS.secondaryGray,
//                 borderWidth: 1,
//                 borderRadius: 4,
//                 marginVertical: 6,
//                 justifyContent: "center",
//                 paddingLeft: 8,
//               }}
//             >
//               <TextInput
//                 value={name}
//                 onChangeText={(value) => setName(value)}
//                 editable={true}
//               />
//             </View>
//           </View>

//           <View
//             style={{
//               flexDirection: "column",
//               marginBottom: 6,
//             }}
//           >
//             <Text style={{ }}>Email</Text>
//             <View
//               style={{
//                 height: 44,
//                 width: "100%",
//                 borderColor: COLORS.secondaryGray,
//                 borderWidth: 1,
//                 borderRadius: 4,
//                 marginVertical: 6,
//                 justifyContent: "center",
//                 paddingLeft: 8,
//               }}
//             >
//               <TextInput
//                 value={email}
//                 onChangeText={(value) => setEmail(value)}
//                 editable={true}
//               />
//             </View>
//           </View>

//           <View
//             style={{
//               flexDirection: "column",
//               marginBottom: 6,
//             }}
//           >
//             <Text style={{ }}>Password</Text>
//             <View
//               style={{
//                 height: 44,
//                 width: "100%",
//                 borderColor: COLORS.secondaryGray,
//                 borderWidth: 1,
//                 borderRadius: 4,
//                 marginVertical: 6,
//                 justifyContent: "center",
//                 paddingLeft: 8,
//               }}
//             >
//               <TextInput
//                 value={password}
//                 onChangeText={(value) => setPassword(value)}
//                 editable={true}
//                 secureTextEntry
//               />
//             </View>
//           </View>

//           <View
//             style={{
//               flexDirection: "column",
//               marginBottom: 6,
//             }}
//           >
//             <Text style={{ }}>Date or Birth</Text>
//             <TouchableOpacity
//               onPress={handleOnPressStartDate}
//               style={{
//                 height: 44,
//                 width: "100%",
//                 borderColor: COLORS.secondaryGray,
//                 borderWidth: 1,
//                 borderRadius: 4,
//                 marginVertical: 6,
//                 justifyContent: "center",
//                 paddingLeft: 8,
//               }}
//             >
//               <Text>{selectedStartDate}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: "column",
//             marginBottom: 6,
//           }}
//         >
//           <Text style={{  }}>Country</Text>
//           <View
//             style={{
//               height: 44,
//               width: "100%",
//               borderColor: COLORS.secondaryGray,
//               borderWidth: 1,
//               borderRadius: 4,
//               marginVertical: 6,
//               justifyContent: "center",
//               paddingLeft: 8,
//             }}
//           >
//             <TextInput
//               value={country}
//               onChangeText={(value) => setCountry(value)}
//               editable={true}
//             />
//           </View>
//         </View>

//         <TouchableOpacity
//           style={{
//             backgroundColor: COLORS.primary,
//             height: 44,
//             borderRadius: 6,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Text
//             style={{
//               color: COLORS.white,
//             }}
//           >
//             Save Change
//           </Text>
//         </TouchableOpacity>

//         {renderDatePicker()}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default User;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONTS } from "../../../constants";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { imagesDataURL } from "../../../constants/data";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

const User = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
  const [name, setName] = useState("Melissa Peters");
  const [email, setEmail] = useState("metperters@gmail.com");
  const [password, setPassword] = useState("randompassword");
  const [country, setCountry] = useState("Nigeria");

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    // Nếu đăng nhập thành công, cập nhật trạng thái isLoggedIn
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    // Xử lý đăng ký ở đây
    // Nếu đăng ký thành công, cập nhật trạng thái isLoggedIn
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    // Nếu cần, đặt lại trạng thái và đưa người dùng về màn hình đăng nhập
    setIsLoggedIn(false);
  };

  function renderDatePicker() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              padding: 35,
              width: "90%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: COLORS.primary,
                textHeaderColor: "#469ab6",
                textDefaultColor: COLORS.white,
                selectedTextColor: COLORS.white,
                mainColor: "#469ab6",
                textSecondaryColor: COLORS.white,
                borderColor: "rgba(122,146,165,0.1)",
              }}
            />

            <TouchableOpacity onPress={handleOnPressStartDate}>
              <Text style={{ color: COLORS.white }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  // Kiểm tra đăng nhập trước khi hiển thị nội dung
  if (!isLoggedIn) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#EAEDF4",
          paddingHorizontal: 22,
          justifyContent: "center",
        }}
      >
        <View style={{
          marginBottom: 30,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Ionicons name='person-circle-sharp' size={100} />
        </View>
        <Text style={{ textAlign: "center" }}>Đăng nhập hoặc đăng ký</Text>
        
        {/* Nút Đăng nhập */}
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: COLORS.primary,
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>

        {/* Nút Đăng ký */}
        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            backgroundColor: COLORS.primary,
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{}}>Edit Profile</Text>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={{
                height: 170,
                width: 170,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons
                name="photo-camera"
                size={32}
                color={COLORS.primary}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{}}>Name</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ }}>Email</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ }}>Password</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ }}>Date or Birth</Text>
            <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginBottom: 6,
          }}
        >
          <Text style={{  }}>Country</Text>
          <View
            style={{
              height: 44,
              width: "100%",
              borderColor: COLORS.secondaryGray,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
            }}
          >
            <TextInput
              value={country}
              onChangeText={(value) => setCountry(value)}
              editable={true}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            Lưu lại
          </Text>
        </TouchableOpacity>
        <Text>

        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: COLORS.primary,
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10
          }}
        >
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            Đăng xuất
          </Text>
        </TouchableOpacity>
        

        {renderDatePicker()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;