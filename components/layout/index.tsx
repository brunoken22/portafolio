"use client"
import { Header } from "../header"
import { Footer } from "../footer"
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
 
export function Layout({children}:any){

   const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

   useServerInsertedHTML(() => {
      const styles = styledComponentsStyleSheet.getStyleElement()
      styledComponentsStyleSheet.instance.clearTag()
      return <>{styles}</>
   })

   if (typeof window !=='undefined') return <>{children}</>
   
   return (
      <>
          <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <Header/>
               {children}
            <Footer/>
         </StyleSheetManager>

      </>
   )
}