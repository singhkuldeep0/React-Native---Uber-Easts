import React from 'react';
import { View , Text , StyleSheet, Image, ScrollView, ImageSourcePropType} from 'react-native';

interface ICategoriesProps {
}

interface itemProps {
  image:ImageSourcePropType,
  text:string
}

const items = [
  {
    image:require('../assets/images/shopping-bag.png'),
    text:'Pick-up'
  },
  {
    image:require('../assets/images/soft-drink.png'),
    text:'Soft-drink'
  },
  {
    image:require('../assets/images/fast-food.png'),
    text:'Fast-food'
  },
  {
    image:require('../assets/images/desserts.png'),
    text:'Desserts'
  },
  {
    image:require('../assets/images/deals.png'),
    text:'Deals'
  },
  {
    image:require('../assets/images/coffee.png'),
    text:'Coffee & tea'
  },
  {
    image:require('../assets/images/bread.png'),
    text:'Bakery Items'
  },
]

const Categories: React.FC<ICategoriesProps> = (props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item:itemProps , index:number) => (
        <View key={index} style={styles.container}>
      <Image 
      source={item.image}
      style={styles.imageStyles}
      />
        <Text style={styles.textStyles}>{item.text}</Text>
    </View>
        ))}
    </ScrollView>
  ) ;
};


const styles = StyleSheet.create({

  container:{
    alignItems:'center',
    marginRight:30
  },

  imageStyles:{
    width:50,
    height:40,
    resizeMode:'contain'
    },

   textStyles:{
      fontSize:13,
      fontWeight:'900',
      color:'black'
   }
})

export default Categories;
