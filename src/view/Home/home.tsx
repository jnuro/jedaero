import React from 'react';
import { Text } from 'react-native';
import { ScrollView, Card } from '@sqd-ffrog/components';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

function Home() {
  return (
    <SafeAreaConsumer>
      {insets => (
        <ScrollView title="홈">
          <Card>
            <Text>hihihi</Text>
            <Text>hihihi</Text>
          </Card>
          <Card>
            <Text>hihihi</Text>
            <Text>hihihi</Text>
          </Card>
          <Card>
            <Text>hihihi</Text>
            <Text>hihihi</Text>
          </Card>
        </ScrollView>
      )}
    </SafeAreaConsumer>
  );
}

export default Home;
