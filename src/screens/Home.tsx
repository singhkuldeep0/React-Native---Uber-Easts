import * as React from 'react';
import { View , Text, SafeAreaView, StyleSheet } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headercontainer}>
        <HeaderTabs/>
        <SearchBar/>
    </View>
    <Categories/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eee',
        flex:1
    },

    headercontainer:{
        backgroundColor:'white',
        padding:15
    }
})

export default Home;
