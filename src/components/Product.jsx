import React from "react";
import { Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Product = ({info}) => {

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={info.imageSrc} />
      <Text data-cy="product-category">{info.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{info.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{info.title}</Heading>
      <Box data-cy="product-price">{info.price}</Box>
    </Stack>
  );
};

export default Product;
