# Personal-website
[![Niccolò's Website](https://api.checklyhq.com/v1/badges/checks/99c0d7c3-1787-40fe-a43f-931cf64e00e9?style=social&theme=light)](https://www.niccolomantovani.com/)

## Introduction
Repository of my personal website [www.niccolomantovani.com](https://www.niccolomantovani.com/)

## Technology
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [ESLint](https://eslint.org/) (linter tool)
- [Prettier](https://prettier.io/) (code formatter)
- [Nodemailer](https://nodemailer.com/about/) (for sending email)
- [Bootstrap](https://getbootstrap.com/) (for style of website)
- [Vercel](https://vercel.com/) (for deploy website)
- [i18next](https://www.i18next.com/) (in order to detect language and change language)
- [reCAPTCHA](https://www.google.com/recaptcha/about/)
- [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)

## Folders structure
- **components:** components that support the render of pages
- **CV:** folder that contains *.tex* file of CV
- **i18n:** translation part with i18n
- **interfaces:** TypeScript interfaces
- **pages:** pages of the site
- **public:** contains the favicon
- **service:** external services that site used via API
- **styles:** CSS of the site


## Usage

### Clone Repository

```
git clone https://github.com/nicomanto/Personal-website.git
```

### Installation
```
npm install or yarn install
```

### Run local website
⚠️ **Before run this command you need to configure environment variables with credentials of email used by _Nodemailer_**
```
npm run dev
```



## Deploy to Vercel
### Installation Vercel
```
npm i -g vercel
```

### Create production deployment
⚠️ **Before run this command you need to configure environment variables with credentials of email used by _Nodemailer_**
```
vercel --prod
```

