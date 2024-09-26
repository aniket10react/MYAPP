import React, { useState }                                                                   from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ActivityIndicator} from "react-native";
import {heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal }                     from '../../../sizeNormalization';
import { Picker }                                                                            from '@react-native-picker/picker';
import Checkbox                                                                              from "expo-checkbox";
import FontAwesome6                                                                          from '@expo/vector-icons/FontAwesome6';
import HomeNavigation                                                                        from '@/assets/images/HomeNavigation.svg'
import LicenseType                                                                           from '@/assets/images/licenseType.svg'
import { useFonts }                                                                          from 'expo-font';

interface State {
    isChecked                : boolean;
    licenseState             : string;
    licenseNumber            : string;
    licenseType              : string;
    state                    : string;
    city                     : string;
    expDate                  : number
}

export default function index() {

  
 
  const [state, setState] = useState<State>({
    isChecked                : false,
    licenseState             : "",
    licenseNumber            : "", 
    licenseType              : "",
    state                    : "",
    city                     : "",
    expDate                  : 0
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


  const licenseStateHandler         = (text: string) => {
    setState(prevState => ({ ...prevState, licenseState: text }));
  };

  const licenseNumberHandler        = (text: string) => {
    setState(prevState => ({ ...prevState, licenseNumber: text }));
  };


  const licenseTypeHandler          = (text: string) => {
    setState(prevState => ({ ...prevState, licenseType: text }));
  };

  const stateHandler                = (itemValue: string) => {
    setState(prevState => ({ ...prevState, state: itemValue }));
  };

  const handleCheckboxChange        = (value: boolean) => {
    setState(prevState => ({ ...prevState, isChecked: value }));
  };

    
  const expDateHandler              = (value: string) => {
    const onlyNums = value.replace(/[^0-9]/g, ''); // Allow only numbers
    setState(prevState => ({ ...prevState, phoneNumber: onlyNums }));
  };


  const saveData = () => {
   
  };

  return (
      <ScrollView style={styles.scollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>State License(s)</Text>
            <Text style={styles.sectionSubtitle}>Select Your License Number To Pre-Populate Form.<Text style={{color:'#2C80FF'}}>Click Here</Text> to verify your License Number</Text>
          </View>

          <View style={styles.uploadSection}>
             <Text style={styles.uploadLabel}>License State</Text>
      
            <View style={styles.pickerContainer}>
              <Picker onValueChange={licenseStateHandler} style={styles.picker}>
                <Picker.Item label="Arizona" value="Arizona" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
              </Picker>
            </View>

             <Text style={styles.uploadLabel}>License Number</Text>
            
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} value={state.licenseNumber} onChangeText={licenseNumberHandler} keyboardType={"numeric"} placeholderTextColor="#656971" placeholder="Entered here"  underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
            </View>

             <Text style={styles.uploadLabel}>License Type</Text>
              
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} value={state.licenseType} onChangeText={licenseTypeHandler} placeholderTextColor="#656971" placeholder="chrisjakson@gmail.com" underlineColorAndroid="transparent" autoCorrect={false} maxLength={20}/>
            </View>

            <View style={styles.rowcontainer}>
              <Text style={styles.nameText}>Jane Smith</Text>
                <View style={styles.iconContainer}>
                  <HomeNavigation width={16} height={16} fill="#fff"/>
                  <Text style={styles.iconText}>22288</Text>
                </View>
                <View style={styles.iconContainer}> 
                  <LicenseType width={16} height={16} fill="#fff"/>
                  <Text style={styles.iconText}>License Type</Text>
                </View>
                  <Checkbox style={styles.checkbox} value={state.isChecked} onValueChange={handleCheckboxChange} color={state.isChecked ? "#2C80FF" : undefined}/>
            </View>

               <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:'90%',backgroundColor:'#2C80FF',marginHorizontal:pixelSizeHorizontal(20),marginTop:pixelSizeVertical(20),height:heightPixel(55),borderRadius:10}} onPress={saveData}>
                 <Text style={styles.loginButtonText}>Search</Text>
               </TouchableOpacity>

                 <Text style={{color:'#E6E6E6',fontFamily:'poppins-semibold',marginLeft:pixelSizeHorizontal(20),fontSize:fontPixel(29),marginTop:10}}>Or</Text>

                 <Text style={styles.uploadLabel}>State</Text>

              <View style={styles.pickerContainer}>
                <Picker selectedValue={state.city} onValueChange={stateHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" />
                </Picker>
              </View>

                  <Text style={styles.uploadLabel}>License Number</Text>

              <View style={styles.inputWrapper}>
                 <TextInput style={styles.input} value={state.licenseNumber} onChangeText={licenseNumberHandler} keyboardType={"numeric"} placeholderTextColor="#656971" placeholder="Entered Number"  underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

                <Text style={styles.uploadLabel}>License Type</Text>

              <View style={styles.pickerContainer}>
                <Picker onValueChange={licenseTypeHandler} style={styles.picker}>
                  <Picker.Item label="select" value="select" />
                </Picker>
              </View>

                <Text style={styles.uploadLabel}>Exp Date #</Text>

              <View style={styles.inputWrapper}>
                 <TextInput style={styles.input} onChangeText={expDateHandler} keyboardType={"numeric"} placeholderTextColor="#656971" placeholder="Enter Here"  underlineColorAndroid="transparent" autoCorrect={false} maxLength={16}/>
              </View>

              <View style={styles.uploadSection}>
                 <Text style={styles.uploadLabel}>Insurance</Text>
                  <View style={styles.uploadContainer}>
                    <Text style={{color:'#2C80FF',fontFamily:'poppins-medium'}}>Upload License</Text>
                  </View>
              </View>

              <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                  <FontAwesome6 name="add" size={24} color="#2c80ff" style={{marginLeft:15}}/>
                  <Text style={{marginLeft:5,fontWeight:'600',color:"#2C80FF"}}>Add Licesense</Text>
              </View>

                  <Text style={{color:'#656A72',fontSize:fontPixel(12),marginLeft:pixelSizeHorizontal(20),marginTop:pixelSizeVertical(10)}}>if you have license from multiple state you can add them.</Text>
                  
              <TouchableOpacity style={styles.loginButton} onPress={saveData}>
                  <Text style={{fontFamily:'poppins-semibold',fontSize:fontPixel(16),color:'#FFFFFF'}}>Update & Save</Text>
              </TouchableOpacity>

          </View>
          
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({

  loadingContainer    : 
  {
    flex              : 1,
    justifyContent    : 'center',
    alignItems        : 'center',
    backgroundColor   : '#fff'
 },

  mainContainer: 
  {
    flex              : 1
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
    fontWeight       : '600',
    color            : '#2593d6',
    fontSize         : fontPixel(16),
    marginHorizontal : pixelSizeHorizontal(13),
    marginBottom     : pixelSizeVertical(10),
  },

  section: 
  {
    marginTop         : pixelSizeVertical(15),
  },

  sectionTitle: 
  {
    color             : '#E6E6E6',
    fontFamily        :'poppins-semibold',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(30),
  },

  rowcontainer: 
  {
    flexDirection     : 'row',
    width             : '90%',
    justifyContent    : 'space-around',
    alignItems        : 'center',
    borderWidth       : 1,
    borderColor       : '#2c80ff',
    marginHorizontal  : pixelSizeHorizontal(20),
    marginTop         : pixelSizeVertical(25),
    height            : heightPixel(60),
    borderRadius      : 10,
  },
  
  nameText: 
  {
    fontFamily        :'poppins-semibold',
    fontSize          : fontPixel(14),
    color             : '#000000'
  },

  iconContainer: 
  {
    flexDirection     : 'row',
    justifyContent    : 'center',
    alignItems        : 'center',
  },

  iconText: 
  {
    marginLeft        : 5,
    fontFamily        :'poppins-regular',
    fontSize          : fontPixel(12),
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

  checkbox: 
  {
    marginRight       : fontPixel(5)
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
  },

  uploadLabel: 
  {
    marginLeft        : pixelSizeHorizontal(20),
    marginTop         : pixelSizeVertical(10),
    color             : '#707371',
    fontWeight        : '500',
    fontFamily        : 'poppins-medium'
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
    borderWidth       : 3,
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
    backgroundColor   : "#e6e6e6",
    fontFamily        :'poppins-regular',
    width             : "90%",
    fontSize          : fontPixel(12),
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
    backgroundColor   : "#e6e6e6",
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
    backgroundColor   : '#2C80FF',
    marginHorizontal  : pixelSizeHorizontal(20),
    marginVertical    : pixelSizeVertical(20),
    height            : heightPixel(55),
    borderRadius      : 10
  },

  loginButtonText: 
  {
    color             : '#fff',
    fontFamily        :'poppins-medium',
    fontSize          : fontPixel(15),
  },

});
