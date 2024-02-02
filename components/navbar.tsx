import { Navbar as RFUINavbar, NavbarItem, NavbarLeft } from "rfui";

export const Navbar = () => {
  return (
    <RFUINavbar size="xl">
      <NavbarLeft>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/islands">Islands</NavbarItem>
        <NavbarItem href="/uncontrolled-form">Uncontrolled form</NavbarItem>
        <NavbarItem href="/controlled-form">Controlled form</NavbarItem>
      </NavbarLeft>
    </RFUINavbar>
  );
};
