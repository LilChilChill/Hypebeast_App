import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert  } from 'react-native'
import {React, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../consts/colors';
import { Button } from 'react-native-paper'

const SignUp = ({navigation}) => {
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Thêm state để theo dõi việc hiển thị thông báo
  const [showFullNameError, setShowFullNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    // Kiểm tra và hiển thị thông báo lỗi cho từng ô input
    setShowFullNameError(!fullName);
    setShowEmailError(!email);
    setShowPasswordError(!password);
    setShowConfirmPasswordError(!confirmPassword);

    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Thông Tin Chưa Đầy Đủ', 'Vui lòng điền đầy đủ thông tin');
    } else if (password !== confirmPassword) {
      Alert.alert('Mật khẩu không khớp', 'Vui lòng nhập lại mật khẩu xác nhận');
    } else {
      // Xử lý logic đăng ký ở đây
      // Ví dụ: navigation.navigate('NextScreen');
    }
  };
  
  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20}} >
      <View style={styles.container}>
      <Ionicons name='arrow-back-outline' size={28} onPress={() => navigation.goBack()}/>
      </View>

      <View style={styles.textHeader}>
        <Text style={{ fontFamily: "heavySfPro", fontSize: 30 }}>
          Welcome
        </Text>
        <Text style={{ fontFamily: "sfPro", fontSize: 18, marginTop: 10 }}>
          Sign up to create your account
        </Text>
      </View>

    <View style={{borderRadius: 40, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,backgroundColor: "#d3e5f5", marginTop: 20, marginHorizontal: -20}}>
      <View style={styles.header}>
            <Button style={styles.btnLogin}>
                <Ionicons name='logo-google' size={18} color={COLORS.dark} />
                <Text style={styles.textBtn}>
                    Google
                </Text>
            </Button>

            <Button style={styles.btnLogin}>
                <Ionicons name='logo-apple' size={18} color={COLORS.dark} />
                <Text style={styles.textBtn}>
                    Apples
                </Text>
            </Button>
      </View>

      <View style={{ marginTop: 15, flexDirection: "row", marginHorizontal: 20 }}>
        <View style={styles.textContainer}>
          <Ionicons name='person-outline' size={24} style={{ marginLeft: 15, marginRight: 10 }} />
          <TextInput
            placeholder='Full name'
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
          {showFullNameError && <Text style={styles.errorText}>Vui lòng nhập họ và tên</Text>}
        </View>
      </View>

      <View style={{ marginTop: 20, flexDirection: "row", marginHorizontal: 20 }}>
        <View style={styles.textContainer}>
          <Ionicons name='mail-outline' size={24} style={{ marginLeft: 15, marginRight: 10 }} />
          <TextInput
            placeholder='Email Address'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          {showEmailError && <Text style={styles.errorText}>Vui lòng nhập Email</Text>}
        </View>
      </View>

      <View style={{ marginTop: 20, flexDirection: "row", marginHorizontal: 20 }}>
        <View style={styles.textContainer}>
          <Ionicons name='lock-closed-outline' size={24} style={{ marginLeft: 15, marginRight: 10 }} />
          <TextInput
            placeholder='Password'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          {showPasswordError && <Text style={styles.errorText}>Vui lòng mật khẩu</Text>}
          <TouchableOpacity
            onPress={toggleShowPassword} 
          >
            <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} style={{marginRight: 10}} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 20, flexDirection: "row", marginHorizontal: 20 }}>
        <View style={styles.textContainer}>
          <Ionicons name='lock-closed-outline' size={24} style={{ marginLeft: 15, marginRight: 10 }} />
          <TextInput
            placeholder='Confirm Password'
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
          />
          {showConfirmPasswordError && <Text style={styles.errorText}>Vui lòng mật khẩu</Text>}
          <TouchableOpacity
            onPress={toggleShowPassword} 
          >
            <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} style={{marginRight: 10}} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text 
          style={{marginTop: 10, marginRight: 5, fontFamily: "WorkSans"}}
          >
          Already have an account?
          {' '}
            <Text 
              style={{marginTop: 10, marginRight: 10, fontFamily: "WorkSans", fontWeight: "bold"}}
              onPress={() => navigation.navigate('Login')}
              >
              Login
            </Text>
        </Text>
      </View>

      <TouchableOpacity 
            style={{marginTop: 15, backgroundColor: "#0098FF", borderRadius: 10, height: 60, marginHorizontal: 20,}}
            onPress={handleSignUp}
            >
            {/* <Ionicons name='logo-google' size={20} style={{ marginLeft: 15, marginRight: 20, color: COLORS.dark }} /> */}
            <Text style={{fontFamily: "WorkSans", color: COLORS.white, textAlign: "center", fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>
              Sign up
            </Text>
      </TouchableOpacity>

      <View style={{flex: 1,alignItems: "center", marginTop: 47, marginBottom:20, }}>
        <Text style={{opacity: 0.4, fontFamily: 'WorkSans', fontSize: 13}}>
          By signing in with an account, you agree to SO's 
        </Text>
        <Text style={{fontFamily: 'WorkSans', fontSize: 13}}>
          <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Terms of Service</Text> 
          {''} <Text style={{color: 'gray'}}>and</Text> {''} 
          <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Privacy Policy.</Text>
        </Text>
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    textHeader: {
      alignItems: "center",
      marginBottom: 50,
    },
    header: {
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20
  },
  btnLogin: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white, 
    width: 150,
    height: 60,
    borderRadius: 10,
    marginBottom: 20,
  },
  textBtn: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "boldSfPro",
    color: COLORS.dark,
  },
  textContainer: {
    height: 50,
    backgroundColor: "rgba(220, 220, 220, 0.50)",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    opacity: 0.5,
    fontSize: 18,
    fontFamily: "boldSfPro",
    color: COLORS.dark,
    flex: 1,
  },
  errorText: {
    color: 'red',
    marginRight: 10,
  },
})