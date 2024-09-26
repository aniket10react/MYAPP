import React, { useState }                                                                   from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity,ActivityIndicator } from "react-native";
import {heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal }                     from '../../../sizeNormalization';
import { Picker }                                                                            from '@react-native-picker/picker';
import Checkbox                                                                              from "expo-checkbox";
import { useFonts }                                                                          from 'expo-font';

interface State {

  selectedLanguage            : string;
  copmanyName                 : string;
  phoneNumber                 : number;
  nameInstitution             : string;
  address                     : string;
  addressTwo                  : string;
  state                       : string;
  city                        : string;
  zipCode                     : number;
  isAddressSameAsInspector    : boolean;

}

export default function CompanyInformation() {
 
    const [state, setState]  = useState<State>({

    selectedLanguage          : "",
    copmanyName               : "",
    phoneNumber               : 0, 
    nameInstitution           : "",
    address                   : "",
    addressTwo                : "",
    state                     : "",
    city                      : "",
    zipCode                   : 0, 
    isAddressSameAsInspector  : false,
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



  const copmanyNameHandler    = (text: string) => {
    setState(prevState => ({ ...prevState, copmanyName: text }));
  };

  const phoneNumberHandler    = (text: string) => {
    const numberValue = parseInt(text, 10);
    setState(prevState => ({ ...prevState, phoneNumber: isNaN(numberValue) ? 0 : numberValue }));
  };


  const addressBoxHandler     = (text: string) => {
    setState(prevState => ({ ...prevState, address: text }));
  };

  const addressBoxTwoHandler  = (text: string) => {
    setState(prevState => ({ ...prevState, addressTwo: text }));
  };

  const stateHandler          = (itemValue: string) => {
    setState(prevState => ({ ...prevState, state: itemValue }));
  };

  const cityHandler           = (itemValue: string) => {
    setState(prevState => ({ ...prevState, city: itemValue }));
  };

  const zipCodeHandler        = (text: string) => {
    const numberValue = parseInt(text, 10);
    setState(prevState => ({ ...prevState, zipCode: isNaN(numberValue) ? 0 : numberValue }));
  };

  const handleCheckboxChange  = (value: boolean) => {
    setState(prevState => ({ ...prevState, isAddressSameAsInspector: value }));
  };

  const saveData = () => {
   
  };

  return (
      <ScrollView style={styles.scollContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Company Information</Text>
            <Text style={styles.sectionSubtitle}>Lorem Ipsum is simple dummy text of the printing and type setting industry.</Text>
          </View>

          <View style={styles.uploadSection}>
            
             <Text style={styles.uploadLabel}>Company Name</Text>
            
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={state.copmanyName} onChangeText={copmanyNameHandler} placeholderTextColor="#656971" placeholder="Street address / PO Box`" underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

             <Text style={styles.uploadLabel}>Company Phone Number</Text>
            
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input}  onChangeText={phoneNumberHandler} placeholderTextColor="#656971" placeholder="Enter Phone Number"  underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

             <View style={styles.section}>
              <Text style={styles.sectionTitle}>Address</Text>
               <View style={styles.cheackboxcontainer}>
                <Checkbox 
                  style={styles.cheackboxstyle}
                  value={state.isAddressSameAsInspector}
                  onValueChange={handleCheckboxChange}
                />
                <Text style={styles.cheackboxtextstyle}>Address Same As Inspector</Text>
               </View>
             </View>

             <Text style={styles.uploadLabel}>Company Address 1</Text>

              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={state.address} onChangeText={addressBoxHandler} placeholderTextColor="#656971" placeholder="Street Address / PO Box" underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

             <Text style={styles.uploadLabel}>Company Address 2</Text>

              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.addressTwo} onValueChange={addressBoxTwoHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(15)}}/>
                </Picker>
              </View>

              <Text style={styles.uploadLabel}>State</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.state} onValueChange={stateHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(15)}}/>
                </Picker>
              </View>

             <Text style={styles.uploadLabel}>City/Town</Text>
              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.city}  onValueChange={cityHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(15)}}/>
                </Picker>
              </View>

             <Text style={styles.uploadLabel}>Zip Code</Text>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input}  keyboardType="numeric" onChangeText={zipCodeHandler} placeholderTextColor="#656971" placeholder="Zip Code" underlineColorAndroid="transparent" autoCorrect = {false} maxLength={5} />
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

 loadingContainer: 
 {
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
    fontFamily        :'poppins-semibold',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(28),
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
    backgroundColor   :'#2C80FF', 
    borderRadius      : 5, 
    marginLeft        : pixelSizeHorizontal(10) 
  },

  cheackboxtextstyle:
  {
    fontSize          : fontPixel(12), 
    fontFamily        :'poppins-medium',
    color             : '#656A72', 
    marginLeft        : pixelSizeHorizontal(8) 
  },

  sectionSubtitle: 
  {
    color             : '#575757',
    fontFamily        :'poppins-medium',
    marginHorizontal  : pixelSizeHorizontal(20),
    fontSize          : fontPixel(11),
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
    color             : '#656172',
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
    backgroundColor   : "#F2F2F2",
    color             : "#000",
    width             : "90%",
    fontFamily        :'poppins-regular',
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
