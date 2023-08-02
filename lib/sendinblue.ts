import * as SibApiV3Sdk from "@sendinblue/client";
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

apiInstance.setApiKey(
   SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
   "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"
);
export async function sendEmail(dataEmail: any) {
   apiInstance
      .sendTransacEmail({
         subject: "Gracias por Contáctarme!",
         sender: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         replyTo: { email: "bruno_am_22@hotmail.com", name: "Bruno Ken" },
         to: [{ name: dataEmail.name, email: dataEmail.email }],
         htmlContent: `
         <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
         <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
         <head>
             <meta charset="UTF-8">
             <meta content="width=device-width, initial-scale=1" name="viewport">
             <meta name="x-apple-disable-message-reformatting">
             <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta content="telephone=no" name="format-detection">
             <title></title>
             <!--[if (mso 16)]>
             <style type="text/css">
             a {text-decoration: none;}
             body{
               padding:5rem !important;
             }
             </style>
             <![endif]-->
             <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
             <!--[if gte mso 9]>
         <xml>
             <o:OfficeDocumentSettings>
             <o:AllowPNG></o:AllowPNG>
             <o:PixelsPerInch>96</o:PixelsPerInch>
             </o:OfficeDocumentSettings>
         </xml>
         <![endif]-->
             <!--[if !mso]><!-- -->
             <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
             <!--<![endif]-->

         </head>
         
         <body>
             <div class="es-wrapper-color">
                 <!--[if gte mso 9]>
                  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                     <v:fill type="tile" color="#000000"></v:fill>
                  </v:background>
               <![endif]-->
                 <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                     <tbody>
                         <tr>
                             <td class="esd-email-paddings" valign="top">
                                 <table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
                                     <tbody>
                                         <tr>
                                             <td class="esd-stripe" align="center">
                                                 <table class="es-content-body" style="background-color: #000000;" width="600" cellspacing="0" cellpadding="0" bgcolor="#000000" align="center">
                                                     <tbody>
                                                         <tr>
                                                             <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                                     <tbody>
                                                                         <tr>
                                                                             <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                                                     <tbody>
                                                                                         <tr>
                                                                                             <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_2c08af9e46abd212569925b240debe0c/images/44391625818311503.png" alt style="display: block;" width="560"></a></td>
                                                                                         </tr>
                                                                                     </tbody>
                                                                                 </table>
                                                                             </td>
                                                                         </tr>
                                                                     </tbody>
                                                                 </table>
                                                             </td>
                                                         </tr>
                                                         <tr>
                                                             <td class="esd-structure es-p20" align="left">
                                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                                     <tbody>
                                                                         <tr>
                                                                             <td width="560" align="left" class="esd-container-frame">
                                                                                 <table cellpadding="0" cellspacing="0" width="100%">
                                                                                     <tbody>
                                                                                         <tr>
                                                                                             <td align="left" class="esd-block-text es-p10t">
                                                                                                 <h1 style="line-height: 100%; font-size: 72px; color: #03aa6f; text-align: center;"><b>Hola ${dataEmail.name}</b>!</h1>
                                                                                             </td>
                                                                                         </tr>
                                                                                     </tbody>
                                                                                 </table>
                                                                             </td>
                                                                         </tr>
                                                                     </tbody>
                                                                 </table>
                                                             </td>
                                                         </tr>
                                                         <tr>
                                                             <td class="esd-structure es-p20b es-p20r es-p20l" align="left">
                                                                 <table width="100%" cellspacing="0" cellpadding="0">
                                                                     <tbody>
                                                                         <tr>
                                                                             <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                                 <table width="100%" cellspacing="0" cellpadding="0">
                                                                                     <tbody>
                                                                                         <tr>
                                                                                             <td align="center" class="esd-block-image es-p20b" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_2c08af9e46abd212569925b240debe0c/images/44391625818311503.png" alt style="display: block;" width="560"></a></td>
                                                                                         </tr>
                                                                                     </tbody>
                                                                                 </table>
                                                                             </td>
                                                                         </tr>
                                                                         <tr>
                                                                             <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                                 <table width="100%" cellspacing="0" cellpadding="0">
                                                                                     <tbody>
                                                                                         <tr>
                                                                                             <td align="center" class="esd-block-image es-p20b" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_2c08af9e46abd212569925b240debe0c/images/44391625818311503.png" alt style="display: block;" width="560"></a></td>
                                                                                         </tr>
                                                                                     </tbody>
                                                                                 </table>
                                                                             </td>
                                                                         </tr>
                                                                         <tr>
                                                                             <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                                 <table width="100%" cellspacing="0" cellpadding="0">
                                                                                     <tbody>
                                                                                         <tr>
                                                                                             <td align="left" class="esd-block-text es-p10b">
                                                                                                 <p style="font-size: 15px;">Espero que este mensaje te encuentre bien. Quiero expresar mi sincero agradecimiento por haberme contactado a través de mi portafolio.</p>
                                                                                                 <p style="font-size: 15px;">Es un verdadero placer recibir tu interés en mi trabajo y en lo que puedo ofrecerte como profesional. Valorando mucho el tiempo que has dedicado a explorar mi portafolio y considerarme para tus necesidades, quiero asegurarte que estoy completamente comprometido/a a brindarte el mejor servicio posible.</p>
                                                                                                 <p style="font-size: 15px;">Si necesitas más información, muestras adicionales de mi trabajo o cualquier otra consulta, no dudes en comunicármelo. Estoy aquí para ayudarte y colaborar en cualquier proyecto que tengas en mente.</p>
                                                                                                 <p style="font-size: 15px;">Espero con ansias la oportunidad de trabajar juntos y hacer realidad tus ideas.</p>
                                                                                                 <p style="font-size: 15px;">Una vez más, gracias por tu confianza en mi trabajo y por considerarme para esta oportunidad.</p>
                                                                                             </td>
                                                                                         </tr>
                                                                                         <tr>
                                                                                             <td align="left" class="esd-block-text es-p40t es-p10b">
                                                                                                 <h2>Atentamente, Bruno ken</h2>
                                                                                             </td>
                                                                                         </tr>
                                                                                     </tbody>
                                                                                 </table>
                                                                             </td>
                                                                         </tr>
                                                                         <tr>
                                                                             <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                                 <table width="100%" cellspacing="0" cellpadding="0">
                                                                                     <tbody>
                                                                                         <tr>
                                                                                             <td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_2c08af9e46abd212569925b240debe0c/images/44391625818311503.png" alt style="display: block;" width="560"></a></td>
                                                                                         </tr>
                                                                                     </tbody>
                                                                                 </table>
                                                                             </td>
                                                                         </tr>
                                                                     </tbody>
                                                                 </table>
                                                             </td>
                                                         </tr>
                                                     </tbody>
                                                 </table>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
         </body>
         
         </html>
         `,
      })
      .then(
         function (data: any) {
            console.log(data.body);
         },
         function (error: any) {
            console.error(error);
         }
      );
   apiInstance
      .sendTransacEmail({
         subject: "Mensaje de portafolio!",

         sender: { email: dataEmail.email, name: dataEmail.name },
         replyTo: { email: dataEmail.email, name: dataEmail.name },
         to: [{ name: "Bruno Ken", email: "bruno_am_22@hotmail.com" }],
         htmlContent: `
         <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
         <meta charset="UTF-8">
         <meta content="width=device-width, initial-scale=1" name="viewport">
         <meta name="x-apple-disable-message-reformatting">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta content="telephone=no" name="format-detection">
         <title></title> 
         <!--[if (mso 16)]>
           <style type="text/css">
           a {text-decoration: none;}
           </style>
           <![endif]--> 
         <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
         <!--[if gte mso 9]>
       <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
       </xml>
       <![endif]-->
        </head>
        <body>
         <div class="es-wrapper-color">
          <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                   <v:fill type="tile" color="#efefef"></v:fill>
                </v:background>
             <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
           <tbody>
            <tr>
             <td class="esd-email-paddings" valign="top">
              
              
              <table class="es-content" cellspacing="0" cellpadding="0" align="center">
               <tbody>
                <tr>
                 <td class="esd-stripe" align="center">
                  <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                   <tbody>
                    <tr>
                     <td class="esd-structure es-p40t es-p40b es-p30r es-p30l" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                       <tbody>
                        <tr>
                         <td class="esd-container-frame" width="540" valign="top" align="center">
                          <table width="100%" cellspacing="0" cellpadding="0">
                           <tbody>
                            <tr>
                             <td class="esd-block-text" align="left" height="28"><h3 style="color: #666666;">Hola, Bruno ken,<br></h3></td>
                            </tr>
                            
                            <tr>
                             <td class="esd-block-text es-p15t" align="left"><p style="color: #999999;"><span style="line-height:200% !important;color:#333333">${dataEmail.message}</span><br></p></td>
                            </tr>
                            
                            
                            
                           </tbody>
                          </table></td>
                        </tr>
                       </tbody>
                      </table></td>
                    </tr>
                   </tbody>
                  </table></td>
                </tr>
               </tbody>
              </table>
              
              </td>
            </tr>
           </tbody>
          </table>
         </div>
        
       </body></html>
         `,
      })
      .then(
         function (data: any) {
            console.log(data.body);
            return data.body;
         },
         function (error: any) {
            console.error(error);
         }
      );
}
