import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";

export default function ChangeRole() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-[#1a1a1a] rounded-lg p-8 w-[800px]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white text-2xl font-semibold">
                    Take your Webinar for a test drive
                  </h2>
                  <Button colorScheme="whiteAlpha" variant="ghost">
                    <CloseIcon w={6} h={6} onClick={onClose} />
                  </Button>
                </div>
                <p className="text-gray-400 mb-4">
                  We have setup a few profiles to make it easy for you or your
                  team to experience each perspective. Join in one click or
                  share access with anyone else.
                </p>
                <div className="space-y-6">
                  <div className="bg-[#252525] p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">MODERATOR</h3>
                    <p className="text-gray-400 mb-4">
                      This role is meant for the event organisers. The moderator
                      is like a stage admin - can add speakers, remove them,
                      invite attendees on stage, kick them out of the event, etc
                    </p>
                    <div className="flex justify-end space-x-4">
                      <Button colorScheme="purple">Invite</Button>
                      <Button colorScheme="purple">Join as Moderator</Button>
                    </div>
                  </div>
                  <div className="bg-[#252525] p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">SPEAKER</h3>
                    <p className="text-gray-400 mb-4">
                      This one is self explanatory. Use this role for folks who
                      are going to be the main guests of the session. Speakers
                      can also invite attendees on the stage, and respond to
                      public chat messages.
                    </p>
                    <div className="flex justify-between">
                      <Button colorScheme="purple">Invite</Button>
                      <Button colorScheme="purple">Join as Speaker</Button>
                    </div>
                  </div>
                  <div className="bg-[#252525] p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">ATTENDEE</h3>
                    <p className="text-gray-400 mb-4">
                      This one is the most basic role - can see and hear
                      whatever is happening on the stage, cannot share their
                      audio and video, and can put up messages on the public
                      chat section.
                    </p>
                    <div className="flex justify-between">
                      <Button colorScheme="purple">Invite</Button>
                      <Button colorScheme="purple">Join as Attendee</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
