import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import {Modal, ModalBody,} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

const AddProduct = ({onSubmit}) => {
  // TODO: Remove below const and instead import them from chakra
   const [form, setform] = useState({});

   const handleChange = (e) => {
     let { value, name } = e.target;
     setform({ ...form, [name]: value });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     onSubmit(form);
   };

  return (
    <>
      <Button my={4} data-cy="add-product-button">x</Button>
      <Modal >
        <ModalBody pb={6}>
          <Input
            data-cy="add-product-title"
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt" value={"shirt"}>
              shirt
            </option>
            <option data-cy="add-product-category-pant" value={"pant"}>
              pant
            </option>
            <option data-cy="add-product-category-jeans" value={"jeans"}>
              jeans
            </option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio
              data-cy="add-product-gender-male"
              name="gender"
              value={"male"}
              onChange={handleChange}
            >
              male
            </Radio>
            <Radio
              data-cy="add-product-gender-female"
              name="gender"
              value={"female"}
              onChange={handleChange}
            >
              female
            </Radio>
            <Radio
              data-cy="add-product-gender-unisex"
              name="gender"
              value={"unisex"}
              onChange={handleChange}
            >
              unisex
            </Radio>
          </RadioGroup>
          <Input
            data-cy="add-product-price"
            name="price"
            onChange={handleChange}
          />
          <Button data-cy="add-product-submit-button" onclick={handleSubmit} >submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
