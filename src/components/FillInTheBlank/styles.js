import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    height: 50,
  },
  text: {
    alignSelf: "flex-end",
    fontSize:18,
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "gray",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
  },
});

export default styles;
