import React, { useState } from "react";
import { View, Text } from "../../components/Themed";
import { TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import StarRating from "react-native-star-rating";

export default function AddScreen() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [review, setReview] = useState("");
    const [overall, setOverall] = useState(0);
    const [workImpact, setWorkImpact] = useState(0);
    const [culture, setCulture] = useState(0);
    const [location, setLocation] = useState(0);
    const [compensation, setCompensation] = useState(0);
    
    return (
    <ScrollView>
      <Formik
        initialValues={{}}
        onSubmit={values => console.log(values)}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Company Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  onChangeText={setCompany}
                  value={company}
                  placeholder="Enter company name..."
                />
              </View>
            </View>
            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Position</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputText}
                    onChangeText={setPosition}
                    value={position}
                    placeholder="Enter coop position..."
                  />
                </View>
            </View>
            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Review</Text>
              <View style={styles.longInputContainer}>
                <TextInput
                  style={styles.inputText}
                  onChangeText={setReview}
                  value={review}
                  placeholder="Write your review..."
                />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Overall</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={overall}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={setOverall}
                        />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Work Impact</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={workImpact}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={setWorkImpact}
                        />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Location</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={location}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={setLocation}
                        />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Compensation</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={compensation}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={setCompensation}
                        />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Culture</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={culture}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={setCulture}
                        />
              </View>
            </View>

            <Button onPress={() => {
              console.log(company, position, review, overall, culture)
            }} title="Submit" />
          </View>
        )}
      </Formik>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  labelInputContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    padding: 10
  }, 
  inputContainer: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    height: 50,
    borderRadius: 5,
    padding: 6,
    marginVertical: 10
  },
  ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: '100%',
      justifyContent: "space-around", 
      marginTop: 5
  },

  longInputContainer: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#EFEFEF',
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    height: 300,
    borderRadius: 5,
    padding: 6,
    marginVertical: 10
  },

  inputText: {
    fontSize: 16,
  },

  labelText: {
    fontSize: 18,
    fontWeight: 'bold'
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
