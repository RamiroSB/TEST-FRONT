import React from 'react'
import { BannerBody } from '../BannerBody/BannerBody';
import { FlexMarcas } from '../FlexMarcas/FlexMarcas';
import { BannerPrincipal } from '../BannerPrincipal/BannerPrincipal';
import { FlexBody } from '../FlexBody/FlexBody';
import { BannerBodyRog } from '../BannerBodyRog/BannerBodyRog'; 
import GrillaHome from '../GrillaHome/GrillaHome';
import { ServiciosCard } from '../ServiciosCard/ServiciosCard';
import { InfoHome } from '../--pasar--InfoHome/InfoHome';
import FlexFeatures from '../--pasar--FlexFeatures/FlexFeatures';

export const HomePage = () => {
  return (
    <>
        <BannerPrincipal/>
        <BannerBody/>
        <FlexFeatures/>

        <InfoHome/>
        <BannerBodyRog/>
        <ServiciosCard/>
        <BannerBodyRog/>
        <GrillaHome/>
        {/* <HomePcGamingNotebooks/> */}
        <FlexMarcas/>
    </>
  )
}
