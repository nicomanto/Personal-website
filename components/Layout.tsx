import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar Nav} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import NavbarItem from "../interfaces/NavbarItem";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { t } = useTranslation(["layout"]);

  const navbar: NavbarItem[] = [
    { title: t('experience'), URL: "/experience" },
    { title: t('projects'), URL: "/projects" },
    { title: t('contacts'), URL: "/contacts" },
  ];

  const changeLanguage= (lang: string)=>{
    i18n.changeLanguage(lang); 
    document.documentElement.lang = i18n.language;
  }
  
  return(
    <>
      <Head>  
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name ="copyright" content="Niccolò Mantovani" />
          <meta name ="keywords" content={t('keywords')}/>
          <meta name="description" content={t('description')} />
          <meta name="author" content="Niccolò Mantovani" />
        </Head>
      <header>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" lang="it" title="Home">Niccolò Mantovani</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
</Navbar>
      </header>
      {children}
      <footer className="text-center mb-3">
          <p>
            {" "}
            &copy; 2021
            {" "}
            <a
              lang="it"
              className="simpleLink"
              target="_blank"
              rel="noopener me noreferrer"
              title="Niccolò Mantovani site"
              href="https://nicomanto.github.io/About-me"
            >
              {"Niccolò Mantovani"}
            </a>
          </p>

          <Button variant="outline-light" onClick={() => {changeLanguage("it");}} size="sm">IT</Button>
          <Button variant="outline-light" onClick={() => {changeLanguage("en");}} size="sm">EN</Button>
        </footer>
    </>
  )
}

export default Layout
