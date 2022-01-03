import React from "react"
import { Button, Pane, Text, majorScale } from 'evergreen-ui'
const HomePage = () => {
  return (
    <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
    <Button>Click me!</Button>
    <Text>This is a clickable Butto</Text>
  </Pane>
  );
}

export default HomePage;