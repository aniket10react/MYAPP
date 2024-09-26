import React, { useState }                                                            from "react";
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,ActivityIndicator}       from "react-native";
import {heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal }              from '../../../sizeNormalization'
import { Picker }                                                                     from '@react-native-picker/picker';
import { useFonts }                                                                   from 'expo-font';

interface State {
  state     : string;
  country   : string;
}

export default function CoverageArea() {
 
  
   const [state, setState] = useState<State>({
    state   : "",
    country : "",
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

  const handleStateChange = (value: string) => {
    setState(prevState => ({ ...prevState, state: value }));
  };

  const handleCountryChange = (value: string) => {
    setState(prevState => ({ ...prevState, country: value }));
  };
 
  return (
  
      <ScrollView style={{flex:1,backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
          <View style={styles.section}>

            <Text style={styles.sectionTitle}>Coverage Area</Text>
            <Text style={styles.sectionSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quos.</Text>

            <Text style={styles.uploadLabel}>State</Text>
              <View style={styles.pickerContainer}>
                <Picker style={styles.picker} selectedValue={state.state} onValueChange={handleStateChange}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
                </Picker>
              </View>

             <Text style={styles.uploadLabel}>Country</Text>
              <View style={styles.pickerContainer}>
                <Picker style={styles.picker} selectedValue={state.country} onValueChange={handleCountryChange}>
                  <Picker.Item label="select" value="select" style={{fontFamily:'poppins-regular',fontSize:fontPixel(16)}}/>
                </Picker>
              </View>

              
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Update & Save</Text>
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
    flex              :1
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
    flex              :1,
    marginTop         : pixelSizeVertical(15),
    
  },

  sectionTitle: 
  {
    color             : '#e6e6e6',
    fontFamily        :'poppins-semibold',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(25),
  },

  sectionSubtitle: 
  {
    color             : '#656a72',
    fontFamily        :'poppins-medium',
    marginHorizontal  : pixelSizeHorizontal(20),
    fontSize          : fontPixel(12),
    marginTop         : pixelSizeVertical(12),
  },

  uploadLabel: 
  {
    marginLeft        : pixelSizeHorizontal(20),
    marginTop         : pixelSizeVertical(10),
    color             : '#656A72',
    fontFamily        :'poppins-medium'
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
    backgroundColor   : '#2C80FF',
    marginHorizontal  : pixelSizeHorizontal(20),
    marginTop         : pixelSizeVertical(30),
    height            : heightPixel(55),
    borderRadius      : 10,
  },

  loginButtonText: 
  {
    color             : '#fff',
    fontFamily        :'poppins-semibold',
    fontSize          : fontPixel(16),
  },

});
