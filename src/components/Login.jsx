import React from 'react'
import { Button } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
  import { EmailIcon } from '@chakra-ui/icons'

export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button size="md"  colorScheme="purple"  onClick={onOpen}>Login</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button leftIcon={<EmailIcon/>} variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  