import { FormErrorMessage, Modal, ModalProps } from "@chakra-ui/react";
import { Post } from "../../types";
import { ModalOverlay } from "@chakra-ui/react";
import { ModalContent } from "@chakra-ui/react";
import { ModalHeader } from "@chakra-ui/react";
import { ModalCloseButton } from "@chakra-ui/react";
import { ModalBody } from "@chakra-ui/react";
import { ModalFooter } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { FormHelperText } from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Partial<Post>) => void;
}
const CreatePostModal = ({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              county: "",
              title: "",
              description: "",
              images: ["https://bit.ly/2Z4KKcF"],
            }}
            onSubmit={onSubmit}
          >
            <Form id="create-post-form">
              {["county", "title", "description"].map((fieldName) => {
                return (
                  <Field name={fieldName} key={fieldName}>
                    {({ field, form }: any) => {
                      // TODO: Fix later
                      return (
                        <FormControl>
                          <FormLabel htmlFor={fieldName}>{fieldName}</FormLabel>
                          <Input
                            {...field}
                            id={fieldName}
                            placeholder={fieldName}
                          />
                          <FormErrorMessage>
                            {form.errors[fieldName]}
                          </FormErrorMessage>
                        </FormControl>
                      );
                    }}
                  </Field>
                );
              })}
              TODO Adaugare imagini problema pentru eu din viitor
            </Form>
          </Formik>
        </ModalBody>

        <ModalFooter>
          <Button
            type="submit"
            form="create-post-form"
            colorScheme="blue"
            mr={3}
          >
            Submit
          </Button>
          <Button variant="ghost" onClick={onClose}>
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
