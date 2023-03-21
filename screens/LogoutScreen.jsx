import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';




const LogoutScreen = ({navigation}) => {
    
    const handleLogout = async () => {
    try{
        // Delete token from secure storage
        await SecureStore.deleteItemAsync('token');
        // Navigate to Login screen
        navigation.navigate('LoginScreen');
        
    } catch (error) {
        console.log(error);
    }
}
    

  return (
    <SafeAreaView>
    <View className='flex w-20 h-10 items-center justify-center mt-72 ml-36 bg-[#2148C0] rounded '>
      <TouchableOpacity onPress={handleLogout}>
        <Text className='color-white'>Logout</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default LogoutScreen;