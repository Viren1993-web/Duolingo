import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    //Border
    borderWidth: 2,
    borderColor: "lightgray",
    borderRadius: 10,
    borderBottomWidth: 4,
    //Size
    width: "48%",
    height: "48%",
    padding: 10,
    alignItems: "center",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  
  },
  selectedText: {
    color: "#40BEF7",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default styles;
