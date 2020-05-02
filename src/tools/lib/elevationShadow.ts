/**
 * https://stenbeck.io/styling-shadows-in-react-native-ios-and-android/
 */
function elevationShadowStyle(elevation: number) {
  return {
    elevation,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0.2 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

export default elevationShadowStyle;
