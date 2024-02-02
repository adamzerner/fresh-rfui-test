import { useState } from "preact/hooks";
import {
  Alert,
  AlertBody,
  AlertHeader,
  Button,
  CheckboxCardGroup,
  CheckboxCardGroupItem,
  Modal,
  PasswordInput,
  Stack,
  Stepper,
  Tabs,
  TabSection,
} from "rfui";

export const TestIsland = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Stack class="gap-12">
      <Alert>Example</Alert>
      <Alert>
        <AlertHeader>Success</AlertHeader>
        <AlertBody>Your profile has been saved.</AlertBody>
      </Alert>
      <CheckboxCardGroup>
        <CheckboxCardGroupItem checkboxRest={{ name: "one" }}>
          One
        </CheckboxCardGroupItem>
        <CheckboxCardGroupItem checkboxRest={{ name: "two" }}>
          Two
        </CheckboxCardGroupItem>
        <CheckboxCardGroupItem checkboxRest={{ name: "three" }}>
          Three
        </CheckboxCardGroupItem>
      </CheckboxCardGroup>
      <div>
        <Button onClick={openModal}>Open modal</Button>
        <Modal isOpen={isModalOpen} close={closeModal}>
          Example
        </Modal>
      </div>
      <PasswordInput />
      <Stepper />
      <Tabs>
        <TabSection tabName="First">One</TabSection>
        <TabSection tabName="Second">Two</TabSection>
        <TabSection tabName="Third">Three</TabSection>
      </Tabs>
    </Stack>
  );
};
