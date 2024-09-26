import React, { useState }                                                                   from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity,ActivityIndicator } from "react-native";
import {heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal }                     from '../../../sizeNormalization';
import { Picker }                                                                            from '@react-native-picker/picker';
import { useFonts }                                                                          from 'expo-font';

interface State {
  firstName                 : string;
  lastName                  : string;
  email                     : string;
  cellPhone                 : string;
  phoneNumber               : string; // Store phone number as a string
  languageSpoken            : string;
  addressBox                : string;
  state                     : string;
  city                      : string;
  zipCode                   : number;
  gender                    : string;
  race                      : string;
}


export default function PersonalInformation() {
 
  const [state, setState] = useState<State>({
    firstName                : "",
    lastName                 : "", 
    email                    : "",
    cellPhone                : "",
    phoneNumber              : "", // Initially an empty string
    languageSpoken           : "",
    addressBox               : "",
    state                    : "",
    city                     : "",
    zipCode                  : 0, 
    gender                   : "",
    race                     : "",
  });

    // Load the custom font
  const [fontsLoaded] = useFonts({
    'poppins-bold'     : require('../../../assets/fonts/Poppins-Bold.ttf'),
    'poppins-medium'   : require('../../../assets/fonts/Poppins-Medium.ttf'),
    'poppins-regular'  : require('../../../assets/fonts/Poppins-Regular.ttf'),
    'poppins-semibold' : require('../../../assets/fonts/Poppins-SemiBold.ttf'),
  
  });

  if (!fontsLoaded) {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#2C80FF" />
        </View>
    );
}


  const firstNameHandler      = (text: string) => {
    setState(prevState => ({ ...prevState, firstName: text }));
  };

  const lastNameHandler       = (text: string) => {
    setState(prevState => ({ ...prevState, lastName: text }));
  };


  const emailHandler          = (text: string) => {
    setState(prevState => ({ ...prevState, email: text }));
  };
  
  const cellPhoneHandler      = (text: string) => {
    setState(prevState => ({ ...prevState, cellPhone: text }));
  };
  

  const phoneNumberHandler    = (value: string) => {
    const onlyNums = value.replace(/[^0-9]/g, ''); // Allow only numbers
    setState(prevState => ({ ...prevState, phoneNumber: onlyNums }));
  };


  const languageSpokenHandler = (text: string) => {
    setState(prevState => ({ ...prevState, languageSpoken: text }));
  };

  
  const stateHandler          = (itemValue: string) => {
    setState(prevState => ({ ...prevState, state: itemValue }));
  };

  const genderHandler         = (itemValue: string) => {
    setState(prevState => ({ ...prevState, gender: itemValue }));
  };

  const raceHandler           = (itemValue: string) => {
    setState(prevState => ({ ...prevState, race: itemValue }));
  };



  const saveData = () => {
   
  };

  return (
      <ScrollView style={styles.scollContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Text style={styles.sectionSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quos.</Text>
          </View>

          <View style={styles.uploadSection}>
            
             <Text style={styles.uploadLabel}>First Name</Text>
            
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={state.firstName} onChangeText={firstNameHandler} placeholderTextColor="#656971" placeholder="Jane" underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

             <Text style={styles.uploadLabel}>Last Name</Text>
            
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input}  onChangeText={lastNameHandler} placeholderTextColor="#656971" placeholder="Smith"  underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>


             <Text style={styles.uploadLabel}>Email</Text>
              
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={state.email} onChangeText={emailHandler} placeholderTextColor="#656971" placeholder="chrisjakson@gmail.com" underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

             <Text style={styles.uploadLabel}>Cell phone</Text>

              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={state.cellPhone} onChangeText={cellPhoneHandler} placeholderTextColor="#656971" placeholder="cell phone" underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

             <Text style={styles.uploadLabel}>Work Phone Number</Text>

              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={state.phoneNumber} keyboardType={"numeric"} onChangeText={phoneNumberHandler} placeholderTextColor="#656971" placeholder="Phone Number" underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

             <Text style={styles.uploadLabel}>Language Spoken</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.languageSpoken} onValueChange={languageSpokenHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
                </Picker>
              </View>

             <Text style={styles.uploadLabel}>City/Town</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.city} onValueChange={stateHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
                </Picker>
              </View>

            <Text style={styles.uploadLabel}>Zip Code</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.city} onValueChange={stateHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
                </Picker>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Demographics</Text>
              </View>
              
             <Text style={styles.uploadLabel}>Gender (optional)</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.gender} onValueChange={genderHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
                </Picker>
              </View>

             <Text style={styles.uploadLabel}>Race (optional)</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.race} onValueChange={raceHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
                </Picker>
              </View>

                <TouchableOpacity style={styles.loginButton} onPress={saveData}>
                  <Text style={styles.loginButtonText}>Update & Save</Text>
                </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
 },

  mainContainer: 
  {
    flex              :1
  },

  scollContainer: 
  {
    flex              : 1,
    backgroundColor   :'#fff'
  },

  container: 
  {
    flex              : 1,
  },

  header: 
  {
    flexDirection     : 'row',
    alignItems        : 'center',
    justifyContent    : 'space-between',
    marginTop         : pixelSizeVertical(20),
  },

  headerText: 
  {
    marginLeft        : pixelSizeHorizontal(25),
    fontSize          : fontPixel(22),
    fontWeight        : '600',
  },

  backText: 
  {
    marginRight       : pixelSizeHorizontal(20),
    color             : '#2c80ffff',
    fontWeight        : '700',
  },

  divider: 
  {
    width             : '70%',
    marginLeft        : pixelSizeHorizontal(20),
    borderBottomWidth : 0.9,
    borderBottomColor : '#9fc5ff',
  },

  nav: 
  {
    flexDirection     : 'row',
    alignItems        : 'center',
    marginTop         : pixelSizeVertical(20),
  },

  navText: 
  {
    color             : '#bddff3',
    marginLeft        : pixelSizeHorizontal(15),
  },

  navSelectedText: 
  {
    fontWeight        : '600',
    color             : '#2593d6',
    fontSize          : fontPixel(16),
    marginLeft        : pixelSizeHorizontal(25),
    marginBottom      : pixelSizeVertical(10),
  },

  section: 
  {
    marginTop         : pixelSizeVertical(10),
  },

  sectionTitle: 
  {
    color             : '#e6e6e6',
    fontFamily        : 'poppins-semibold',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(25),
  },

  cheackboxcontainer:
  {
    flexDirection     : 'row', 
    alignItems        : 'center', 
    marginLeft        : pixelSizeHorizontal(15), 
    marginTop         : pixelSizeVertical(15)
  },

  cheackboxstyle:
  {
    backgroundColor   :'#cfd0cf', 
    borderRadius      : 5, 
    marginLeft        : pixelSizeHorizontal(10) 
  },

  cheackboxtextstyle:
  {
    fontSize          : fontPixel(12), 
    fontWeight        : '500', 
    color             : '#939393', 
    marginLeft        : pixelSizeHorizontal(8) 
  },

  sectionSubtitle: 
  {
    color             : '#575757',
    fontFamily        : 'poppins-medium',
    marginHorizontal  : pixelSizeHorizontal(20),
    fontSize          : fontPixel(12),
    marginTop         : pixelSizeVertical(12),
  },

  uploadSection: 
  {
    marginTop         : pixelSizeVertical(15),
    marginBottom      : pixelSizeVertical(25)
  },

  uploadLabel: 
  {
    marginLeft        : pixelSizeHorizontal(20),
    marginTop         : pixelSizeVertical(10),
    fontFamily        :'poppins-medium',
    color             : '#707371',
  },

  uploadContainer: 
  {
    justifyContent    : 'center',
    alignItems        : 'center',
    borderStyle       : 'dotted',
    width             : '90%',
    height            : heightPixel(50),
    marginTop         : pixelSizeVertical(10),
    marginHorizontal  : pixelSizeHorizontal(20),
    borderWidth       : 1,
    borderColor       : '#3083ff',
    borderRadius      : 10,
  },

  inputWrapper: 
  {
    width             : '100%',
  },

  input: 
  {
    flexDirection     : 'row',
    alignItems        : 'center',
    backgroundColor   : "#f2f2f2",
    fontSize          : fontPixel(14),
    fontFamily        : 'poppins-regular',
    color             : "#000",
    width             : "90%",
    paddingLeft       : pixelSizeHorizontal(10),
    marginTop         : pixelSizeVertical(10),
    marginHorizontal  : pixelSizeHorizontal(20),
    height            : heightPixel(55),
    borderRadius      : 10,
    shadowOffset      : { width: 0, height: 2 },
    shadowOpacity     : 0.23,
    shadowRadius      : 10.62,
    elevation         : 4,
  },

  pickerContainer: 
  {
    width             : '90%',
    backgroundColor   : "#f2f2f2",
    marginTop         : pixelSizeVertical(10),
    marginHorizontal  : pixelSizeHorizontal(20),
    borderRadius      : 10,
    borderWidth       : 1,
    borderColor       : '#ccc',
    overflow          : 'hidden',
  },

  picker: 
  {
    height            : heightPixel(55),
    width             : '100%',
    color             : '#959896'
  },

  loginButton: 
  {
    justifyContent    : 'center',
    alignItems        : 'center',
    width             : '90%',
    backgroundColor   : '#2c80ff',
    marginHorizontal  : pixelSizeHorizontal(20),
    marginTop         : pixelSizeVertical(25),
    height            : heightPixel(55),
    borderRadius      : 10,
  },

  loginButtonText: 
  {
    color             : '#fff',
    fontFamily        : 'poppins-semibold',
    fontSize          : fontPixel(15),
  },

});
