import { RateCategory, SquareReivewCard } from "./types";
import { Pressable, View, Text } from "react-native";
import StarRating from "react-native-star-rating";
import React from "react";

type SquareCardProps = {
  item: SquareReivewCard;
};
const SquareCard = ({ item }: SquareCardProps): JSX.Element => {
  const { overall, ...optionalRatings } = item.rate;
  return (
    <Pressable
      style={{
        width: 200,
        height: 200,
        borderRadius: 10,
        backgroundColor: "white",
      }}
    >
      <View style={{ 
        padding: 5
        }}>
        <View style={{}}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>{item.company}</Text>
            <Text style={{fontSize: 15, fontWeight: '500'}}>{item.position}</Text>
            <View style={{alignItems: 'center', width: '70%'}}>
                {/* <StarRating
                    animation="bounce"
                    disabled
                    maxStars={5}
                    rating={item.rate.overall}
                    fullStarColor="#F5D980"
                    emptyStarColor="#F5D980"
                    starSize={25}
                /> */}
            </View>
        </View>
        <View style={{ }}>
          {Object.entries(optionalRatings).length > 0 ? (
            Object.entries(optionalRatings).map((value, index) =>
              rateToStar({ key: index, title: value[0] as RateCategory, rating: value[1] })
            )
          ) : (
            <></>
          )}
        </View>
      </View>
    </Pressable>
  );
};

type StarProps = {
  key: number;
  title: RateCategory;
  rating: number;
};
const rateToStar = ({ key, title, rating }: StarProps) => {
  return (
    <View
      key={key}
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        justifyContent: 'space-between', 
        marginTop: 5
      }}
    >
      <Text>{RateCategory[title]}</Text>
      <StarRating
        disabled
        maxStars={5}
        rating={rating}
        fullStarColor="#F5D980"
        emptyStarColor="#F5D980"
        starSize={15}
      />
    </View>
  );
};

export default React.memo(SquareCard);
