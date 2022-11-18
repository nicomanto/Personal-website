import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Navbar, Nav} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import NavbarItem from "../interfaces/NavbarItem";
import Image from 'next/image'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { t } = useTranslation(["layout"]);

  const navbar: NavbarItem[] = [
    { title: "Home", URL: "/"},
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
        {/*not user <Image> tag for validation html*/}
        <Navbar.Brand className="navLinkBrand" href="#logo" lang="it"><img src="/img/logo.svg" alt="Lettera N di colore nero" width="50" height="50" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {navbar.map((item) => (
                <Nav.Link className="navLink text-right px-4" href={item.URL}>{item.title}</Nav.Link>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
      <main className="principalContent">
      {children}
      </main>
      <footer className="text-center my-4">
          <p lang="it">
            {" "}
            &copy; {process.env.NEXT_PUBLIC_DATE_NOW.split("/")[2]}
            {" "}
            {"Niccolò Mantovani"}
            <br/>
            <small>
              {t('last_update')}: <time>{process.env.NEXT_PUBLIC_DATE_NOW}</time>
            </small>
          </p>
          <Button variant="outline-dark" onClick={() => {changeLanguage("it");}} size="sm">IT</Button>
          <Button variant="outline-dark" onClick={() => {changeLanguage("en");}} size="sm">EN</Button>
        </footer>
    </>
  )
}

export default Layout
