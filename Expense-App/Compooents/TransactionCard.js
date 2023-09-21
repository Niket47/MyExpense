import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const TransactionCard = ({
  title,
  description,
  transaction,
  time,
  onpress,
  onLongPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onpress}
      onLongPress={onLongPress}>
      <View style={{ backgroundColor: '#000', padding: 10, borderRadius: 10 }}>
        <Image
          resizeMode="contain"
          source={require('../Images/icons/user.png')}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          paddingLeft: 10,
        }}>
        <View>
          <Text style={{ paddingBottom: 10, fontSize: 16, color: '#292B2D' }}>
            {title}
          </Text>
          <Text style={{ paddingBottom: 10, fontSize: 14, color: '#91919F' }}>
            {description}
          </Text>
        </View>
        <View>
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 17,
              color: '#00A86B',
              alignSelf: 'flex-end',
            }}>
            {transaction}.000
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 14,
              color: '#91919F',
              alignSelf: 'flex-end',
            }}>
            {time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 90,
    backgroundColor: '#FCFCFC',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 17,
    marginVertical: 10,
  },
  image: {
    padding: 10,
    width: 40,
    height: 40,
  },
});
