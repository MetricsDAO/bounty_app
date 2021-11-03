import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  AlertIcon,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import mixpanel from "mixpanel-browser";

import { ConnectButton } from "./ConnectButton";

type Props = {
  closeLoginModal: () => void;
};

export const AuthModal = ({ closeLoginModal }: Props) => {
  let { isOpen, onOpen, onClose } = useDisclosure();
  const [discordHandle, setDiscordHandle] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    onOpen();
  }, []);

  const onCloseModal = () => {
    closeLoginModal();
    onClose();
  };

  return (
    <>
      <Modal onClose={onCloseModal} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">
            Login
            <Text fontSize="xs" fontWeight="300">
              <em>Metamask required (mobile will not work for login)</em>
            </Text>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            {error && (
              <Alert status="warning" borderRadius="15px" marginBottom="5px">
                <AlertIcon />
                {error}
              </Alert>
            )}
            <FormControl>
              <FormLabel>Discord Handle (used for Rewards)</FormLabel>
              {/* @ts-ignore */}
              <Input
                placeholder="Discord Handle"
                onChange={(event) => setDiscordHandle(event.target.value)}
              />
            </FormControl>
            <Box marginTop="10px">
              <ConnectButton
                setError={(v: string) => setError(v)}
                buttonText="Login with MetaMask/Web3 Wallet"
                discordHandle={discordHandle}
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
