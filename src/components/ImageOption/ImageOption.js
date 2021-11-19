import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style";
import PropTypes from "prop-types";

const ImageOption = (/* props */ { image, text, isSelected, onPress }) => {
  //const { image, text } = props;
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <View
        style={[
          styles.optionContainer,
          isSelected ? styles.selectedContainer : {},
        ]}
      >
        <Image
          source={{
            uri: image,
          }}
          resizeMode="contain"
          style={styles.optionImage}
        />
        <Text style={isSelected ? styles.selectedText : styles.optionText}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;
