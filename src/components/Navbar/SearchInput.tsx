import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align='center'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' mb={1} />
        </InputLeftElement>
        <Input
          type='text'
          placeholder='Search Reddit'
          fontSize='10pt'
          _placeholder={{ color: "gray.500" }}
          _hover={{ borderColor: "blue.500", bg: "white", border: "1px solid" }}
          _focus={{
            borderColor: "blue.500",
            outline: "none",
            border: "1px solid",
          }}
          bg='grey.50'
          height='34px'
          borderRadius='1.25em'
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
