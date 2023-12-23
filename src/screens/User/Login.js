import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { useNaviagtion, useNavigation } from '@react-navigation/native';
import { firebase } from '../../../config';
import auth from '@react-native-firebase/auth';
// import { ScrollView  } from 'react-native-gesture-handler';


async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoginDisabled = !(email.trim() && password.trim());

  const loginUser = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.goBack();
    } catch (error) {
      alert(error.message);
    }
  };

    return (
        <ScrollView  >
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome</Text>

                    <Text style={styles.subtitle}>
                        Login or Sign up to access your account
                    </Text>
                    <View style={styles.logSign}>
                        <Text style={styles.Log}>Login</Text>
                        <Text style={styles.Sign}>Sign up</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>
                        <View style={styles.btnSecondary}>
                            <MaterialCommunityIcons
                                color="#000"
                                name="google"
                                size={18}
                                style={{ marginRight: 12 }}
                            />

                            <Text style={styles.btnSecondaryText}>Login with Google</Text>

                            <View style={{ width: 12 }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>
                        <View style={styles.btnSecondary} onPress={()=>onFacebookButtonPress()}>
                            <MaterialCommunityIcons
                                color="#000"
                                name="apple"
                                size={18}
                                style={{ marginRight: 12 }}
                            />

                            <Text  style={styles.btnSecondaryText}>Login with Apple</Text>

                            <View style={{ width: 12 }} />
                        </View>
                    </TouchableOpacity>




                </View>
                <View style={styles.formAction}>

                    <Text style={styles.formActionSpacer}>Or continue with</Text>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>

                    </TouchableOpacity>

                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <MaterialCommunityIcons style={styles.inputLabel} name="gmail" size={24} color="black" />

                        <TextInput
                            style={styles.inputControl}
                            placeholder="Email"
                            onChangeText={(text) => setEmail(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.input}>
                        <AntDesign style={styles.inputLabel} name="lock" size={24} color="black" />

                        <TextInput
                            style={styles.inputControl}
                            placeholder="Password"
                            onChangeText={(text) => setPassword(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={styles.ques}>Forgot Password?</Text>
                    <TouchableOpacity
                        onPress={isLoginDisabled ? null : loginUser}
                        style={[styles.btn, { opacity: isLoginDisabled ? 0.5 : 1 }]}
                        disabled={isLoginDisabled}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={{ marginTop: 20 }}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                            Don't have an account? Register Now
                        </Text>
                    </TouchableOpacity>



                </View>
            </View>
        </SafeAreaView>
        </ScrollView >
    );
}
const INPUT_OFFSET = 50;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    header: {
        marginVertical: 36,

    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'flex-end',
        marginBottom: 36,

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 8,
        marginLeft: 100,
    },
    logSign: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    Log: {
        fontSize: 18,
        fontWeight: '500',
    },
    Sign: {
        fontSize: 18,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        marginLeft: 30,
        marginBottom: 40,
    },
    form: {
        marginBottom: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginVertical: 2,
    },
    formActionSpacer: {
        marginVertical: 12,
        fontSize: 14,
        fontWeight: '600',
        color: '#4b4858',
        textAlign: 'center',
    },
    formFooter: {
        fontSize: 14,
        fontWeight: '600',
        color: '#51505a',
        textAlign: 'center',
    },
    inputLabel: {
        position: 'absolute',
        width: INPUT_OFFSET,
        lineHeight: 44,
        top: 0,
        left: 0,
        bottom: 0,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: '500',
        color: '#222',
        zIndex: 9,
        paddingLeft: 5,
    },
    btnSecondary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: 'transparent',
        borderColor: '#000',
        marginBottom: 12,
    },
    input: {
        marginBottom: 16,
    },
    inputControl: {
        height: 44,
        backgroundColor: '#f3eff6',
        paddingLeft: INPUT_OFFSET,
        paddingRight: 24,
        borderRadius: 12,
        paddingLeft: 70,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: 'rgb(25, 91, 255)',
        borderColor: '#000',
        marginTop: 40,
        height: 90,
    },
    btnText: {
        fontSize: 22,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
        marginLeft: -20,

    },
    btnSecondaryText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#000',
    },
});
export default Login
