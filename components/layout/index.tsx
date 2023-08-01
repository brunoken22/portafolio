"use client"
import { Header } from "../header"
import { Footer } from "../footer"
import React, { useState } from 'react'
 
export function Layout({children}:any){


   return (
      <>
         <Header/>
            {children}
         <Footer/>
      </>
   )
}