import React from 'react';
import { View , StyleSheet, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface ISearchBarProps {
}

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete 
        placeholder='Search' 
        styles={{
          textInput:{
            backgroundColor:'#eee',
            borderRadius:20,
            fontWeight:'700',
            marginTop:7
          },
          textInputContainer:{
            backgroundColor:'#eee',
            borderRadius:50,
            flexDirection:'row',
            alignItems:'center',
            marginRight:10
          }
        }}

        renderLeftButton={()=>(
        <View style={{marginLeft:10}}>
          <Icon style={styles.icon} name='location-sharp' size={28}/>
        </View>)}

          renderRightButton={()=>(
            <View
            style={styles.rightButton}
            >
              <AntDesign style={styles.anticon} name='clockcircle' size={14}/>
              <Text style={styles.searchText}>Search</Text>
            </View>
          )}

        />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:15,
    flexDirection:'row',
  },

  icon:{
    color:'black'
  },

  rightButton:{
      flexDirection:'row',
      marginRight:8,
      backgroundColor:'white',
      padding:9,
      borderRadius:30,
      alignItems:'center',
  },

  searchText:{
    color:'black',
    fontWeight:'600'
  },

  anticon:{
    color:'black',
    marginRight:6
  }

})

export default SearchBar;
