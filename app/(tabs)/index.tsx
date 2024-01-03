import { StyleSheet } from 'react-native';
import { SafeAreaView, FlatList, Pressable, Button} from 'react-native';
import { Text, View } from '../../components/Themed';
import { SquareReivewCard } from '../../components/types';
import { Link, Stack } from 'expo-router';
import SquareCard from '../../components/SquareCard';
import React from 'react';

const sections: Section[] = [
  {
    title: "All Reviews",
    elements: Array(5).fill({
      company: "Facebook",
      position: "Software Engineering",
      rate: {
        overall: 4,
        workImpact: 4,
        location: 3,
        compensation: 5
      }
    })
  },
  {
    title: "Latest Reviews",
    elements: Array(5).fill({
      company: "Facebook",
      position: "Software Engineering",
      rate: {
        overall: 4,
        workImpact: 4,
        location: 3,
        compensation: 5
      }
    })
  },
  {
    title: "Top Companies",
    elements: Array(5).fill({
      company: "Facebook",
      position: "Software Engineering",
      rate: {
        overall: 4,
        workImpact: 4,
        location: 3,
        compensation: 5
      }
    })
  },
  {
    title: "Recently Viewed",
    elements: Array(5).fill({
      company: "Facebook",
      position: "Software Engineering",
      rate: {
        overall: 4,
        workImpact: 4,
        location: 3,
        compensation: 5
      }
    })
  }
]

const renderSection = (section: Section) => {
  return (
    <View style={{backgroundColor: '#EFEFEF'}}>
      <Stack.Screen/>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 15, backgroundColor: '#EFEFEF'}}>
        <Text style={styles.title}>{section.title}</Text>
        <Link href="/fav" replace asChild>
        <Pressable>
          <Text> View all ></Text>
        </Pressable>
        </Link>
      </View>
      <View style={{marginLeft: 15, marginBottom: 20}}>
      <FlatList 
        horizontal
        data={section.elements}
        renderItem={({item}) => <SquareCard item={item}/>}
        style={{backgroundColor: '#EFEFEF'}}
        ItemSeparatorComponent={() => (
              <View
                  style={{
                  height: "100%",
                  width: 20,
                  backgroundColor: '#EFEFEF'
                  }}
              />
          )}
      />

      </View>
    </View>
  )
}

type Section = {
  title: string,
  elements: SquareReivewCard[]
}

export default function HomeScreen() {
  let flatListRef: FlatList<Section>;
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{margin: 15, fontSize: 16, fontStyle: 'italic'}}>Hi Emma, you might be interested in... </Text>
      <View style={styles.btnGroup}>
        <FlatList
          horizontal
          data={sections}
          renderItem={({item, index}) => (<Pressable
            // key={index}
            style= {styles.btn}
            onPress={() => flatListRef.scrollToIndex({animated: true, index})}
          >
            <Text>{item.title}</Text>
          </Pressable>)}
          ItemSeparatorComponent={() => (
            <View style={{width: 20, backgroundColor: '#EFEFEF'}}/>
        )}
        />
      </View>
      <FlatList 
        style={{backgroundColor: '#EFEFEF'}}
        ref={(ref) => { flatListRef = ref! }}
        data={sections}
        renderItem={({item}) => renderSection(item)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#EFEFEF'

  },

  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor: '#EFEFEF'

  },

  btn: {
    fontSize: 12,
    borderRadius: 8,
    flex: 1,
    border: 1,
    backgroundColor: 'white',
    marginVertical: 15,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 5}
  },

});
