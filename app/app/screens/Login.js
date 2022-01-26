import React, {useContext, useState} from 'react';
import {  Button,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet, } from 'react-native';



const Login = ({ navigation }) => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
 
  return (
    <View tyle={styles.container}>
        
        <View style={styles.wrapper}>
        <Text style={{textAlign:'center',fontSize:20, marginBottom:5,marginTop:20}}>Sign IN</Text>
        <Text style={{textAlign:'center',fontSize:10, marginBottom:25,marginTop:5}}>Sign Into  Your Account</Text>
            <TextInput style={styles.input}    value={email}  onChangeText={text => setEmail(text)} placeholder='Your Email'/>
            <TextInput style={styles.input}    value={password} onChangeText={text => setPassword(text)} placeholder='Your Password'/>
            <Button title="Login"/>
             
         <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
       </View>

        
   </View>

        
    </View>
      
   
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
        width:'80%',
        marginLeft:40
      
    },
    input: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 4,
      paddingHorizontal: 20,
      height:"15%"
    },
    link: {
      color: 'blue',
    },
  });

export default Login;