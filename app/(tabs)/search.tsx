import { FlatList, Pressable, StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import SearchBar from '../../components/SearchBar';
import { useState } from 'react';
import { RectReviewCard } from '../../components/types';

export default function SearchScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchClicked, setSearchClicked] = useState(false)
  
  return (
    <View style={styles.container}>
      <SearchBar 
        clicked={searchClicked} 
        searchPhrase={searchPhrase} 
        setSearchPhrase={setSearchPhrase} 
        setClicked={setSearchClicked}
      />
      <FlatList
        data={reviewCards}
        renderItem={({item}) => renderCards(item)}
      />
    </View>
  );
}

const reviewCards: RectReviewCard[] = Array(5).fill({
  company: "Facebook",
  position: "Software Engineering",
  rate: {
    overall: 4,
    workImpact: 4,
    location: 3,
    compensation: 5
  },
  duration: 10,
  location: 'Cambridge, MA',
  review: 'Worst place to work ever'
})

const renderCards = (review: RectReviewCard) => (
    <Pressable style={{width: 350, height: 180, borderWidth: 2, backgroundColor: 'skyblue', margin: 20}}/>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
