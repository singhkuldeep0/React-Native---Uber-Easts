import React , { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IHeaderTabsProps {
}

interface IHeaderButtonProps {
  text:string,
  activeTab:string;
  setActiveTab:React.Dispatch<React.SetStateAction<string>>
}

const HeaderTabs: React.FunctionComponent<IHeaderTabsProps> = ({}) => {

  const [activeTab , setActiveTab] = useState("Delivery")

  return (
    <View style={styles.container}>
        <HeaderButton text='Delivery' activeTab={activeTab} setActiveTab={setActiveTab}/>
        <HeaderButton text='Pickup' activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  );
};

const HeaderButton:React.FC<IHeaderButtonProps> = ({text,activeTab,setActiveTab})=>{
  
  const styles = StyleSheet.create({
    touchContainer:{
      backgroundColor:activeTab===text ? 'black' : 'white',
      paddingHorizontal:18,
      paddingVertical:6,
      borderRadius:30,
    },
    
    touchtext:{
      color:activeTab===text ? 'white' : 'black',
      fontSize:15,
      fontWeight:'900'
    }
  })
 

 return ( 
    <TouchableOpacity style={styles.touchContainer} onPress={()=>setActiveTab(text)}>
  <Text style={styles.touchtext}>{text}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignSelf:'center',
    },

 
})

export default HeaderTabs;
