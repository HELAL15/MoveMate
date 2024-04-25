import React from 'react'
import {Helmet} from "react-helmet";
import fav from '../assets/images/fav.svg'
import { useLngContext } from '../context/ChangeLng';
import logo from '../assets/images/logo.svg'

const WebHelmet = ({title }) => {

  const {l} = useLngContext()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{l(title)}</title>
        <link rel="icon" href={fav} />
        <meta property="og:type" content="website.ecommerce"></meta>
        <meta property="og:image" content={logo}></meta>
        <meta property="og:determiner" content="the"></meta>
        <meta property="og:locale" content="en_GB"></meta>
        <meta property="og:locale:alternate" content="ar_AR"></meta>
        <meta property="og:site_name" content={l(title)}></meta>
        <meta property="og:image:secure_url" content={logo}></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image:width" content="300"></meta>
        <meta property="og:image:height" content="300"></meta>
        <meta property="og:image:alt" content="Logo for Tutrend ecommerce website"></meta>
        <meta name="description" content={l("desc")} />
      </Helmet>
    </>
  )
}

export default WebHelmet
