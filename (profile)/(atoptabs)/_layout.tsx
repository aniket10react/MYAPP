import { useState }                                 from 'react';
import { Text, View,ActivityIndicator,StyleSheet}   from 'react-native';
import { createMaterialTopTabNavigator }            from '@react-navigation/material-top-tabs';
import { SafeAreaView }                             from 'react-native-safe-area-context';
import index                                        from './index';
import Billing                                      from './Billing';
import DigitalSignature                             from './DigitalSignature';
import CoverageArea                                 from './CoverageArea';
import CompanyInformation                           from './CompanyInformation';
import PersonalInformation                          from './PersonalInformation';
import Documents                                    from './Documents';
import { LinearGradient }                           from 'expo-linear-gradient';
import { useNavigation }                            from '@react-navigation/native';
import { useFonts }                                 from 'expo-font';
import { fontPixel }                                from '@/sizeNormalization';



export const CustomHeader = () => {
  const navigation = useNavigation();

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
    <>
      <SafeAreaView>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
          <View style={{width:'85%'}}>
            <Text style={{fontFamily:'poppins-semibold',fontSize:fontPixel(20),color:'#000',marginLeft:20,marginTop:10}}>Manage Profile</Text>
            <Text style={{width:'80%',marginLeft:15,borderBottomWidth:0.8,borderBottomColor:'#2593D6'}}>{null}</Text>
          </View>
          <View style={{width:'15%'}}>
            <Text style={{color:'#2593D6',fontFamily:'poppins-semibold'}} onPress={() => navigation.toggleDrawer()}>Back</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const MaterialTopTabs = createMaterialTopTabNavigator();

const TabBarOptions = (indicatorWidth) => ({
  tabBarStyle: {
    elevation: 0,
    marginHorizontal:10,
    backgroundColor: 'transparent',
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabBarScrollEnabled: true,
  tabBarItemStyle: {
    width: 'auto'
  },
  tabBarIndicatorStyle: {
    backgroundColor: 'white',
    width: indicatorWidth, // Use the dynamic width
    height: 5,
    display:'none'
  },
   tabBarActiveTintColor: '#2593D6', // Active item color
  tabBarInactiveTintColor: 'rgba(37, 147, 214, 0.4)', // Ina
});

const Layout = () => {
  const [indicatorWidth, setIndicatorWidth] = useState(0); // State to hold the indicator width

  return (
    <LinearGradient colors={['#fff', '#fff']} style={{ flex: 1 }}>
      <CustomHeader />
        <View style={{ flex: 1 }}>
          <MaterialTopTabs.Navigator
            screenOptions={{
              ...TabBarOptions(indicatorWidth), // Pass the indicator width to options
              tabBarActiveTintColor: '#2593D6', // Set the active tab text color
              tabBarInactiveTintColor: 'rgba(37, 147, 214, 0.4)',  // Set the inactive tab text color
              tabBarContentContainerStyle: {
                backgroundColor: 'transparent',
              },
              tabBarIndicatorContainerStyle: {
                backgroundColor: 'transparent',
              }
            }}>
          
              <MaterialTopTabs.Screen 
                name="index" 
                options={{
                  tabBarLabel: ({ focused }) => (
                    <View 
                      style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} 
                      onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        if (focused) {
                          setIndicatorWidth(width);
                        }
                      }}
                    >
                      <Text style={{ color: focused ? '#2593D6' : 'rgba(37, 147, 214, 0.4)', fontWeight: 'bold', fontSize: 14 }}>State License(s)</Text>
                    </View>
                  )
                }} 
                component={index}
              />

              <MaterialTopTabs.Screen 
                name="Personal Information" 
                options={{
                  tabBarLabel: ({ focused }) => (
                    <View 
                      style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}
                      onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        if (focused) {
                          setIndicatorWidth(width);
                        }
                      }}
                    >
                      <Text style={{ color: focused ? '#2593D6' : 'rgba(37, 147, 214, 0.4)', fontSize: 14, fontWeight: 'bold' }}>Personal Information</Text>
                    </View>
                  )
                }} 
                component={PersonalInformation}
              />

              <MaterialTopTabs.Screen 
                name="CompanyInformation" 
                options={{
                  tabBarLabel: ({ focused }) => (
                    <View 
                    style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}
                      onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        if (focused) {
                          setIndicatorWidth(width); // Update the indicator width if this tab is focused
                        }
                      }}
                    >
                      <Text style={{ color: focused ? '#2593D6' : '#rgba(37, 147, 214, 0.4)',fontWeight: 'bold' }}>Company Information</Text>
                    </View>
                  )
                }} 
                component={CompanyInformation}
              />

              <MaterialTopTabs.Screen 
                name="CoverageArea" 
                options={{
                  tabBarLabel: ({ focused }) => (
                    <View 
                    style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}
                      onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        if (focused) {
                          setIndicatorWidth(width); // Update the indicator width if this tab is focused
                        }
                      }}
                    >
                      <Text style={{ color: focused ? '#2593D6' : '#rgba(37, 147, 214, 0.4)',fontWeight: 'bold' }}>Coverage Area</Text>
                    </View>
                  )
                }} 
                component={CoverageArea}
              />

              <MaterialTopTabs.Screen 
                name="DigitalSignature" 
                options={{
                  tabBarLabel: ({ focused }) => (
                    <View 
                    style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}
                      onLayout={(event) => {
                        const { width } = event.nativeEvent.layout;
                        if (focused) {
                          setIndicatorWidth(width); // Update the indicator width if this tab is focused
                        }
                      }}
                    >
                      <Text style={{ color: focused ? '#2593D6' : '#rgba(37, 147, 214, 0.4)',fontWeight: 'bold' }}>Digital Signature</Text>
                    </View>
                  )
                }} 
                component={DigitalSignature}
              /> 

              <MaterialTopTabs.Screen 
                  name="Billing" 
                  options={{
                    tabBarLabel: ({ focused }) => (
                      <View 
                      style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}
                        onLayout={(event) => {
                          const { width } = event.nativeEvent.layout;
                          if (focused) {
                            setIndicatorWidth(width); // Update the indicator width if this tab is focused
                          }
                        }}
                      >
                        <Text style={{ color: focused ? '#2593D6' : '#rgba(37, 147, 214, 0.4)',fontWeight: 'bold' }}>Billing</Text>
                      </View>
                    )
                  }} 
                  component={Billing}
              /> 

              <MaterialTopTabs.Screen 
                  name="Documents" 
                  options={{
                    tabBarLabel: ({ focused }) => (
                      <View 
                      style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        onLayout={(event) => {
                          const { width } = event.nativeEvent.layout;
                          if (focused) {
                            setIndicatorWidth(width); // Update the indicator width if this tab is focused
                          }
                        }}
                      >
                        <Text style={{ color: focused ? '#2593D6' : '#rgba(37, 147, 214, 0.4)',fontWeight: 'bold' }}>Documents</Text>
                      </View>
                    )
                  }} 
                  component={Documents}
              /> 

          </MaterialTopTabs.Navigator>
        </View>
    </LinearGradient>
  );
}

export default Layout;

const styles = StyleSheet.create({

  loadingContainer    : 
  {
    flex              : 1,
    justifyContent    : 'center',
    alignItems        : 'center',
    backgroundColor   : '#fff'
 },
});

