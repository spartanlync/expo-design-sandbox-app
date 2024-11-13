import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import TrailerAxleTiresComponent from '@/components/TrailerAxleTiresComponent';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/*
      <Text
          style={styles.defaultText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Trailer SVG goes here
        </Text>

        true / false

        */}
        <TrailerAxleTiresComponent doesAxle3Exist={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  defaultText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
