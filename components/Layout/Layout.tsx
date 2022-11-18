import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { CartDrawer } from "../CartDrawer";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import SideMenu from "./SideMenu";

interface LayoutProps {
  children?: JSX.Element[] | JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <Box>
      <Navbar
        setIsOpenMenu={setIsOpenMenu}
      />
      {children}
      <SideMenu
        isOpen={isOpenMenu}
        onClose={setIsOpenMenu}
      />
      <CartDrawer />
      <Footer />
    </Box>
  )
}
