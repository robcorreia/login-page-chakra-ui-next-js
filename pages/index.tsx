import { Button } from '@chakra-ui/button'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { Input } from '@chakra-ui/input'
import { Flex, Heading } from '@chakra-ui/layout'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700" )

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background={formBackground} p={12} rounded={6}>
      <Heading mb={6}>Log in</Heading>
      <Input placeholder="robson@contato.com" variant="filled" mb={3} type="email" />
      <Input placeholder="********" variant="filled" mb={6} type="password" />
      <Button mb={6} colorScheme="teal">Log in</Button>
      <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
    </Flex>
  </Flex>
  )
}

export default IndexPage
