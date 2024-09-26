import React,                                                                    { useRef } from 'react';
import { GestureHandlerRootView }                                                           from 'react-native-gesture-handler';
import { StyleSheet,ImageBackground, TouchableOpacity,ActivityIndicator }                   from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Drawer }                                                                           from 'expo-router/drawer';
import Entypo                                                                               from '@expo/vector-icons/Entypo';
import { View, Text }                                                                       from 'react-native';
import {heightPixel,fontPixel,pixelSizeVertical,pixelSizeHorizontal, widthPixel }           from '../../sizeNormalization'
import ManageProfile                                                                        from '@/assets/images/ManageProfile.svg'
import Earnings                                                                             from '@/assets/images/Earnings.svg'
import AboutUs                                                                              from '@/assets/images/aboutus.svg'
import GetSupport                                                                           from '@/assets/images/GetSupport.svg'
import PrivacyPolicy                                                                        from '@/assets/images/PrivacyPolicy.svg'
import TermsAndCondtion                                                                     from '@/assets/images/article.svg'
import Logout                                                                               from '@/assets/images/logout.svg'
import { useFonts }                                                                         from 'expo-font';


export default function Layout() {

    // Load the custom font
    const [fontsLoaded] = useFonts({
      'poppins-bold'     : require('../../assets/fonts/Poppins-Bold.ttf'),
      'poppins-medium'   : require('../../assets/fonts/Poppins-Medium.ttf'),
      'poppins-regular'  : require('../../assets/fonts/Poppins-Regular.ttf'),
      'poppins-semibold' : require('../../assets/fonts/Poppins-SemiBold.ttf'),
    
    });
  
    if (!fontsLoaded) {
      return (
          <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#2C80FF" />
          </View>
      );
  }
  

  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{headerTintColor :'#000',
                drawerActiveTintColor   : "#000",
                drawerInactiveTintColor : "#000",
                drawerLabelStyle        : { fontSize: fontPixel(16) },
                drawerType              : 'front',
            drawerActiveBackgroundColor : 'transparent',
          drawerInactiveBackgroundColor : 'transparent',
        }}>

        <Drawer.Screen
          name="(atoptabs)"
          options={{
            drawerIcon: ({ focused }) => (
              <View style={styles.drawerIconContainer}>
                <View style={styles.drawerIconBackground}>
                  <ManageProfile width={18} height={18} fill="#fff"/>
                </View>
                <Text style={[styles.drawerIconText, { color: focused ? '#fff' : '#aaa' }]}>Manage Profile</Text>
              </View>
            ),
            title: '',
            headerShown:false,
            headerTintColor: '#000',
          }}
        />

        <Drawer.Screen
          name="(earning)"
          options={{
            drawerIcon: ({ focused }) => (
              <View style={styles.drawerIconContainer}>
                <View style={styles.drawerIconBackground}>
                  <Earnings width={18} height={18} fill="#fff"/>
                </View>
                <Text style={[styles.drawerIconText, { color: focused ? '#fff' : '#aaa' }]}>Earnings</Text>
              </View>
            ),
            title: '',
            headerShown:false,
            headerTintColor: '#000',
          }}
        />
        
        <Drawer.Screen
          name="(baboutus)"
          options={{
            drawerIcon: ({ focused }) => (
              <View style={styles.drawerIconContainer}>
                <View style={styles.drawerIconBackground}>
                  <AboutUs width={18} height={18} fill="#fff"/>
                </View>
                <Text style={[styles.drawerIconText, { color: focused ? '#fff' : '#aaa' }]}>About Us</Text>
              </View>
            ),
            title: '',
            headerShown:false,
            headerTintColor: '#000',
          }}
        />

        <Drawer.Screen
          name="(getsupport)"
          options={{
            drawerIcon: ({ focused }) => (
              <View style={styles.drawerIconContainer}>
                <View style={styles.drawerIconBackground}>
                  <GetSupport width={18} height={18} fill="#fff"/>
                </View>
                <Text style={[styles.drawerIconText, { color: focused ? '#fff' : '#aaa' }]}>Get Support</Text>
              </View>
            ),
            title: '',
            headerShown:false,
            headerTintColor: '#000',
          }}
        />

      <Drawer.Screen
          name="(privacypolicy)"
          options={{
            drawerIcon: ({ focused }) => (
              <View style={styles.drawerIconContainer}>
                <View style={styles.drawerIconBackground}>
                  <PrivacyPolicy width={18} height={18} fill="#fff"/>
                </View>
                <Text style={[styles.drawerIconText, { color: focused ? '#fff' : '#aaa' }]}>Privacy Policy</Text>
              </View>
            ),
            title: '',
            headerShown:false,
            headerTintColor: '#000',
          }}
        />

        <Drawer.Screen
          name="(termsandcondtion)"
          options={{
            drawerIcon: ({ focused }) => (
              <View style={styles.drawerIconContainer}>
                <View style={styles.drawerIconBackground}>
                  <TermsAndCondtion width={18} height={18} fill="#fff"/>
                </View>
                <Text style={[styles.drawerIconText, { color: focused ? '#fff' : '#aaa' }]}>Terms & condition</Text>
              </View>
            ),
            title: '',
            headerShown:false,
            headerTintColor: '#000',
          }}
        />
     </Drawer>
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <ImageBackground source={require('../../assets/images/drawer.jpg')} style={styles.container}>
      <DrawerContentScrollView {...props} style={styles.container}>
        <View style={styles.drawerHeader}>
          <View style={styles.drawerHeaderContent}>
            <View style={styles.drawerHeaderProfile}>
              <View style={styles.drawerheaderprofile}>
                <Text style={styles.drawerheaderprofiletextstyle}>CJ</Text>
              </View>
            </View>
            <View style={styles.drawerHeaderTextContainer}>
              <Text style={styles.drawerHeaderName}>Chris Johnson</Text>
              <Text style={styles.drawerHeaderEmail}>chris.jhonson@gmail.com</Text>
              <Text style={styles.drawerbottomwidthstyle}>{null}</Text>
            </View>
            <View style={styles.drawerHeaderCross}>
              <Entypo name="cross" size={24} color="#fff" />
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <TouchableOpacity style={styles.logoutButton}>
           <View style={styles.drawerIconContainer}>
            <Logout width={25} height={25} fill="#fff" />
            <Text style={styles.drawerIconTextlogout}>Logout</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </ImageBackground>
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

  container             :

  {
    flex              : 1,
  },

  logoutButton           :

  {
    flexDirection     : 'row',
    alignItems        : 'center',
    marginTop         : pixelSizeVertical(140),
    marginLeft        : pixelSizeHorizontal(20)
  },
  
  gradient                :

  {
    flex              : 1,
  },
  
  drawerHeader            :

  {
    height            : heightPixel(150),
    justifyContent    : 'center',
    alignItems        : 'center',
  },

  drawerheaderprofile     :

  {
    justifyContent    : 'center',
    height            : 60,
    width             : 60,
    borderRadius      : 60/2,
    alignItems        :'center', 
    backgroundColor   :'#fff', 
    marginLeft        : 30
  },

  drawerheaderprofiletextstyle
                           :
  {
    color             :'#2799dd', 
    fontWeight        :'900', 
    fontSize          : fontPixel(25)
  },

  profileImage             : 

  {
    width             : 80,
    height            : 80,
    borderRadius      : 40/2,
    marginBottom      : pixelSizeVertical(10),
  },

  username                 : 

  {
    fontSize          : fontPixel(18),
    fontWeight        : 'bold',
  },

  drawerIconContainer      :

  {
    flexDirection     : 'row',
    alignItems        : 'center',
  },

  drawerIconBackground     :

  {
    backgroundColor   : '#fff',
    height            :  heightPixel(40),
    width             :  widthPixel(40),
    borderRadius      :  40/2,
    justifyContent    :  'center',
    alignItems        :  'center',
  },

  drawerIconText           :

  {
    marginLeft        : pixelSizeHorizontal(15),
    color             : '#fff',
    fontSize          : fontPixel(17),
    fontFamily        : 'poppins-regular'
  },

  drawerIconTextlogout     :

  {
    color             : '#fff',
    marginLeft        : pixelSizeHorizontal(5),
    fontSize          : fontPixel(19),
  },

  drawerHeaderContent      :

  {
    flexDirection     : 'row',
    justifyContent    : 'center',
    alignItems        : 'center',
    width             : '100%',
  },

  drawerHeaderProfile      :

  {
    width             : '25%',
  },

  drawerHeaderTextContainer :

  {
    width             : '60%',
    marginLeft        : pixelSizeHorizontal(20),
  },

  drawerHeaderName          : 

  {
    fontWeight        : '600',
    marginLeft        : pixelSizeHorizontal(15),
    fontFamily        :'poppins-medium',
    color             : '#fff',
    fontSize          : fontPixel(20),
  },

  drawerHeaderEmail         :

  {
    fontFamily        :'poppins-regular',
    fontSize          : fontPixel(11),
    marginLeft        : pixelSizeHorizontal(15),
    color             : '#fff',
  },

  drawerbottomwidthstyle    :

  {
    borderBottomWidth : 0.3, 
    borderBottomColor : '#fff'
  },

  drawerHeaderCross         :
   
  {
    width             : '15%',
    marginLeft        : pixelSizeHorizontal(2),
  },
});

