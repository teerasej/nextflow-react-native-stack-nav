import { View, Text } from 'react-native'
import React from 'react'
import { Box, Button, Container, HStack } from 'native-base'

const HomePage = ({ navigation }) => {
  return (
    <>
      <Container style={{ padding: 10 }}>
        <Button onPress={() => navigation.navigate('Chat')}  style={{ marginBottom: 10 }} >
          <Text style={{ color: 'white' }} >Chat</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Settings')}>
          <Text style={{ color: 'white' }} >Setting</Text>
        </Button>
      </Container>
    </>
  )
}



export default HomePage