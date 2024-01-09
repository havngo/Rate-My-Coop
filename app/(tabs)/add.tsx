import React, { useState } from "react";
import { View, Text } from "../../components/Themed";
import { TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import StarRating from "react-native-star-rating";
import { Coop } from "../../components/types";

type FormValues = {company: string, review: string, position: string, overall: number, workImpact: number, location: number, compensation: number, culture: number}
const initialValues: FormValues = { company: '', position: '', review: '', overall: 0, workImpact: 0, compensation: 0, location: 0, culture: 0}

const submit = async (values: FormValues) => {
  const {company, review, position, overall} = values;
  if (!company || !review || !position || !overall) {
    return;
  } 
  console.log('submitting...')
  const newReview: Coop = {
    company,
    position,
    review,
    rating: {
      overall,
      workImpact: values.workImpact,
      location: values.location,
      compensation: values.compensation,
      culture: values.culture
    }
  }
  const requestSettings: RequestInit =  { method: 'POST', body: JSON.stringify(newReview), headers: {'Content-Type': 'application/json'}}
  const response : Response = await fetch(`http://10.0.0.166:3000/api/coops`, requestSettings);
  console.log(response)
  values = initialValues;
}

const validate = (values: FormValues) => {
  const errors: any = {};
  if (!values.company) {
    errors.company = 'Required'
  }
  if (!values.position) {
    errors.position = 'Required'
  }
  if (!values.review) {
    errors.review = 'Required'
  }
  if (!values.overall || values.overall === 0) {
    errors.ovaral = 'Required'
  }

  return errors;
}

export default function AddScreen() {    
    return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validate={validate}
        >
        {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
          <View>
            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Company Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  onChangeText={handleChange('company')}
                  value={values.company}
                  placeholder="Enter company name..."
                />
              </View>
              {errors.company && <Text style={styles.errorText}>{errors.company}</Text> }
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Position</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputText}
                    onChangeText={handleChange('position')}
                    value={values.position}
                    placeholder="Enter coop position..."
                  />
                </View>
                {errors.position && <Text style={styles.errorText}>{errors.position}</Text> }
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Review</Text>
              <View style={styles.longInputContainer}>
                <TextInput
                  style={styles.inputText}
                  onChangeText={handleChange('review')}
                  value={values.review}
                  placeholder="Write your review..."
                />
              </View>
              {errors.review && <Text style={styles.errorText}>{errors.review}</Text> }
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Overall</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={values.overall}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={(star) => setFieldValue('overall', star)}
                        />
              </View>
              {errors.overall && <Text style={styles.errorText}>{errors.overall}</Text> }
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Work Impact</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={values.workImpact}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={(star) => setFieldValue('workImpact', star)}
                        />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Location</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={values.location}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={(star) => setFieldValue('location', star)}
                        />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Compensation</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={values.compensation}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={(star) => setFieldValue('compensation', star)}
                        />
              </View>
            </View>

            <View style={styles.labelInputContainer}>
              <Text style={styles.labelText}>Culture</Text>
              <View style={styles.ratingContainer}>
                <StarRating
                        animation="swing"
                        maxStars={5}
                        rating={values.culture}
                        fullStarColor="#F5D980"
                        emptyStarColor="#F5D980"
                        starSize={55}
                        selectedStar={(star) => setFieldValue('culture', star)}
                        />
              </View>
            </View>
            <View style={styles.btn}>
              <Button 
                onPress={() => handleSubmit()}
                title="Submit" 
              />
            </View>
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
    backgroundColor: 'white',
    borderColor: 'grey',
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
    backgroundColor: 'white',
    borderColor: 'grey',
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

  errorText: {
    fontSize: 14,
    color: 'red',
    fontStyle: 'italic',
    alignSelf: 'flex-end'
  },

  labelText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  btn: {
    alignSelf: 'center',
    fontSize: 12,
    borderRadius: 8,
    flex: 1,
    border: 1,
    backgroundColor: 'white',
    marginVertical: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 5},
  },

});
