// responsiveStyles.js
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const responsiveStyles = {
  container: {
    width: wp('80%'),
    height: hp('50%'),
  },
};
