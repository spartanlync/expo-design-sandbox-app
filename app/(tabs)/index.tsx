import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import TrailerAxleTiresComponent from '@/components/UI-TrailerAxleTiresComponent';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TrailerAxleTiresComponent />

      <View style={styles.pgContentContainer}>
        <Text
          style={styles.defaultText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">

          UI Instruction {"\n"} goes here
        </Text>
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  pgContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
});
