import {
  Footer as RFUIFooter,
  FooterColumn,
  FooterHeading,
  FooterItem,
} from "rfui";

export const Footer = () => {
  return (
    <RFUIFooter size="xl">
      <FooterColumn>
        <FooterHeading>About</FooterHeading>
        <FooterItem href="/about">About</FooterItem>
        <FooterItem href="/philosophy">Philosophy</FooterItem>
        <FooterItem href="https://github.com/users/adamzerner/projects/2">
          Roadmap
        </FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Docs</FooterHeading>
        <FooterItem href="/">Components</FooterItem>
        <FooterItem href="/getting-started">Getting started</FooterItem>
        <FooterItem href="/tutorial">Tutorial</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Code</FooterHeading>
        <FooterItem href="https://github.com/adamzerner/rfui">
          GitHub
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CHANGELOG.md">
          Changelog
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/CONTRIBUTING.md">
          Contributing
        </FooterItem>
        <FooterItem href="https://github.com/adamzerner/rfui/blob/master/LICENSE">
          License
        </FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeading>Help</FooterHeading>
        <FooterItem href="mailto:adamzerner@protonmail.com">
          Contact
        </FooterItem>
        <FooterItem href="/faq">FAQ</FooterItem>
      </FooterColumn>
    </RFUIFooter>
  );
};
