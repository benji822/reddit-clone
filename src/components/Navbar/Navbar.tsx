import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "@/components/Navbar/SearchInput";

type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex alignItems='center'>
        <Image src='/images/redditFace.svg' alt='Logo' height='30px' />
        <Image
          src='/images/redditText.svg'
          alt='Logo'
          height='46px'
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
    </Flex>
  );
};
export default Navbar;
