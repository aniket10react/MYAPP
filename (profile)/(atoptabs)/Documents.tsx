import React, { useState }                                                          from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,ActivityIndicator }   from "react-native";
import {widthPixel,heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal } from '../../../sizeNormalization';
import UploadSign                                                                   from '@/assets/images/horizontaldot.svg'
import Description                                                                  from '@/assets/images/description.svg'
import { useFonts }                                                                 from 'expo-font';



export default function PersonalInformation() {

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
  
 
  const saveData = () => {
   
  };

  return (
      <ScrollView style={styles.scollContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.container}>

          <View>
            <Text style={styles.sectionTitle}>Documents</Text>
            <Text style={styles.sectionSubtitle}>Lorem ipsum is a simply dummy text of the printing and type setting industry.</Text>
          </View>

          <View style={styles.uploadSection}>      
             <Text style={styles.uploadLabel}>Insurance</Text>
               <View style={styles.uploadContainer}>
                  <Text style={{fontFamily:'poppins-medium',fontSize:fontPixel(15),color:'#2C80FF'}}>Upload File</Text>
               </View>
             <Text style={styles.uploadLabel}>W9</Text>
               <View style={styles.uploadContainer}>
                  <Text style={{fontFamily:'poppins-medium',fontSize:fontPixel(15),color:'#2C80FF'}}>Upload File</Text>
               </View>
          </View>

            <Text style={{fontSize:20,marginLeft:26,fontWeight:'semibold',color:'#000'}}>Uploaded Document</Text>

              <View style={styles.filecontainer}>
                <View style={styles.fileinner}>
                  
                  <View style={styles.fileInfo}>
                    <View style={styles.fileInfoStyle}>
                      <Description  width={19} height={16} fill="#B5AFAF"/>
                    </View>
                    <View style={styles.fileinfodata}>
                      <Text style={styles.fileinfodataone}>Certification & License.doc</Text>
                      <Text style={styles.fileinfodatatwo}>98.04 kb</Text>
                    </View>
                  </View>
                  
                  <View>
                      <UploadSign  width={21} height={5} fill="#B5AFAF" style={styles.dotIconStyle}/>
                  </View>
                </View>

               </View>

               <View style={styles.filecontainer}>
                <View style={styles.fileinner}>
                  
                  <View style={styles.fileInfo}>
                    <View style={styles.fileInfoStyle}>
                      <Description  width={19} height={16} fill="#B5AFAF"/>
                    </View>
                    <View style={styles.fileinfodata}>
                      <Text style={styles.fileinfodataone}>Certification & License.doc</Text>
                      <Text style={styles.fileinfodatatwo}>98.04 kb</Text>
                    </View>
                  </View>
                  
                  <View>
                      <UploadSign  width={21} height={5} fill="#B5AFAF" style={styles.dotIconStyle}/>
                  </View>
                </View>

               </View>

               <View style={styles.filecontainer}>
                <View style={styles.fileinner}>
                  
                  <View style={styles.fileInfo}>
                    <View style={styles.fileInfoStyle}>
                      <Description  width={19} height={16} fill="#B5AFAF"/>
                    </View>
                    <View style={styles.fileinfodata}>
                      <Text style={styles.fileinfodataone}>Certification & License.doc</Text>
                      <Text style={styles.fileinfodatatwo}>98.04 kb</Text>
                    </View>
                  </View>
                  
                  <View>
                    <UploadSign  width={21} height={5} fill="#B5AFAF" style={styles.dotIconStyle}/>
                  </View>
                </View>

               </View>

               <View style={styles.filecontainer}>
                <View style={styles.fileinner}>
                  
                  <View style={styles.fileInfo}>
                    <View style={styles.fileInfoStyle}>
                      <Description  width={19} height={16} fill="#B5AFAF"/>
                    </View>
                    <View style={styles.fileinfodata}>
                      <Text style={styles.fileinfodataone}>Certification & License.doc</Text>
                      <Text style={styles.fileinfodatatwo}>98.04 kb</Text>
                    </View>
                  </View>
                  
                  <View>
                     <UploadSign  width={21} height={5} fill="#B5AFAF" style={styles.dotIconStyle}/>
                  </View>
                </View>

               </View>

               <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Update & Save</Text>
               </TouchableOpacity>

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
    backgroundColor   :'#fff'
  },

  container: 
  {
    flex              : 1,
  },

  section: 
  {
    marginTop         : pixelSizeVertical(15),
  },

  sectionTitle: 
  {
    color             : '#e6e6e6',
    fontFamily        :'poppins-semibold',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(35),
  },


  sectionSubtitle: 
  {
    color             : '#656A72',
    fontWeight        : '500',
    marginLeft        : pixelSizeHorizontal(20),
    fontSize          : fontPixel(12),
    marginTop         : pixelSizeVertical(5),
  },

  uploadSection: 
  {
    marginBottom      : pixelSizeVertical(25)
  },

  uploadLabel: 
  {
    marginLeft        : pixelSizeHorizontal(26),
    fontSize          : fontPixel(16),
    marginTop         : pixelSizeVertical(20),
    fontFamily        :'poppins-medium',
    color             : '#656A72',
  },

  uploadContainer: 
  {
    justifyContent    : 'center',
    alignItems        : 'center',
    borderStyle       : 'dotted',
    width             : '87%',
    height            : heightPixel(50),
    marginTop         : pixelSizeVertical(10),
    marginHorizontal  : pixelSizeHorizontal(26),
    borderWidth       : 3,
    borderColor       : '#2D81FF',
    borderRadius      : 10,
  },

  filecontainer:
  {
    width            :'90%',
    marginHorizontal :pixelSizeHorizontal(20), 
    marginTop        :pixelSizeVertical(10), 
    backgroundColor  :'#f2f2f2', 
    height           :heightPixel(75), 
    borderRadius     :10
  },

  fileinner:
  {
    flexDirection    :'row', 
    justifyContent   :'space-between', 
    alignItems       :'center',
    height           : '100%'
  },

  fileInfo:
  {
    flexDirection    :'row', 
    alignItems       :'center'
  },

  fileInfoStyle:
  {
    backgroundColor  :'#fff', 
    height           :heightPixel(65), 
    width            :widthPixel(60), 
    justifyContent   :'center',
    alignItems       :'center',
    marginLeft       :pixelSizeHorizontal(5),
    borderRadius     :5
  },

  fileinfodata:
  {
    marginLeft       :pixelSizeHorizontal(10)
  },

  fileinfodataone:
  {
    fontFamily       :'poppins-medium',
    color            :'#000',
    fontSize         :fontPixel(13)
  },

  fileinfodatatwo:
  {
    fontSize         :fontPixel(12),
    marginTop        :pixelSizeVertical(5),
    fontFamily       :'poppins-regular',
    color            :'#000',
    opacity          :0.5
  },

  dotIconStyle:
  {
    marginRight      :pixelSizeHorizontal(10)
  },
  

  loginButton: 
  {
    justifyContent    : 'center',
    alignItems        : 'center',
    width             : '90%',
    backgroundColor   : '#2C80FF',
    marginHorizontal  : pixelSizeHorizontal(20),
    marginVertical    : pixelSizeVertical(30),
    height            : heightPixel(55),
    borderRadius      : 10,
  },

  loginButtonText: 
  {
    color             : '#fff',
    fontWeight        : 'semibold',
    fontSize          : fontPixel(16),
  },

});
