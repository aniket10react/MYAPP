import React, { }                                                                     from "react";
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,ActivityIndicator}       from "react-native";
import { SafeAreaView }                                                               from "react-native-safe-area-context";
import {heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal }              from '../../../sizeNormalization';
import Octicons                                                                       from '@expo/vector-icons/Octicons';
import UploadSign                                                                     from '@/assets/images/uploadSign.svg'
import { useFonts }                                                                   from 'expo-font';


export default function DigitalSignature() {
 
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
 
  return (
      <ScrollView style={styles.scollContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>

          <View style={styles.section}>

            <Text style={styles.sectionTitle}>Digital Signature</Text>
            <Text style={styles.sectionSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quos.</Text>

            <View style={styles.signcontainer}>
              <Text style={styles.signText}>Sign Here</Text>
            </View>

              <Text style={styles.orText}>Or</Text>

            <View style={styles.uploadContainer}>
              <UploadSign width={81} height={81} fill="#fff"/>
              <Text style={styles.uploadText}>Upload Sign</Text>
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

  scollContainer: 
  {
    flex              : 1,
    backgroundColor   : '#fff'
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
    marginTop         : pixelSizeVertical(10),
    
  },

  sectionTitle: 
  {
    color             : '#cfd0cf',
    fontWeight        : '600',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(25),
  },

 
  sectionSubtitle: 
  {
    color             : '#656A72',
    fontFamily        :'poppins-medium',
    marginHorizontal  : pixelSizeHorizontal(20),
    fontSize          : fontPixel(12),
    marginTop         : pixelSizeVertical(12),
  },

  signcontainer: 
  {
    width             : '90%',
    borderWidth       : 0.9,
    borderColor       : '#aeb0af',
    height            : heightPixel(300),
    marginHorizontal  : pixelSizeHorizontal(20),
    marginTop         : pixelSizeVertical(20),
    borderRadius      : 20,
    justifyContent    : 'center',
    alignItems        : 'center',
  },

  signText: 
  {
    color             : '#656A72',
    fontSize          : fontPixel(19),
    fontFamily        : 'poppins-medium'
  },

  orText: 
  {
    color             : '#cfd0cf',
    fontWeight        : '600',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(25),
    marginTop         : 15,
  },

  uploadContainer: 
  {
    justifyContent    : 'center',
    alignItems        : 'center',
    width             : '90%',
    borderWidth       : 2,
    borderColor       : '#aeb0af',
    borderStyle       : 'dotted',
    height            : heightPixel(300),
    marginHorizontal  : pixelSizeHorizontal(20),
    borderRadius      : 20,
    marginTop         : pixelSizeVertical(17),
  },

  uploadText: 
  {
    color             : '#aeb0af',
    fontSize          : fontPixel(18),
    fontFamily        :'poppins-medium'
  },

  uploadSection: 
  {
    marginTop         : pixelSizeVertical(15),
    marginBottom      : pixelSizeVertical(25)
  },

  loginButton: 
  {
    justifyContent    : 'center',
    alignItems        : 'center',
    width             : '90%',
    backgroundColor   : '#2c80ff',
    marginHorizontal  : pixelSizeHorizontal(20),
    marginVertical    : pixelSizeVertical(20),
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
