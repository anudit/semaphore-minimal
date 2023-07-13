import { generateProof } from '@anudit/semaphore-protocol-proof';
import { Group } from '@semaphore-protocol/group';
import { Identity } from '@semaphore-protocol/identity';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  async function runProcess() {
    let identity = new Identity();
    let group = new Group(10, 20);
    group.addMember(identity.commitment)

    let fullProof = await generateProof(
      identity,
      group,
      20,
      20,
    )

    alert(`done `)

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Pressable onPress={() => {
        runProcess()
      }}>
        <Text>Generate</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
