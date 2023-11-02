import * as SibApiV3Sdk from '@sendinblue/client';
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.SENDINBLUE as string
);
export async function sendEmail(dataEmail: any) {
  apiInstance
    .sendTransacEmail({
      subject: 'Gracias por Contáctarme!',
      sender: {email: 'bruno_am_22@hotmail.com', name: 'Bruno Ken'},
      replyTo: {email: 'bruno_am_22@hotmail.com', name: 'Bruno Ken'},
      to: [{name: dataEmail.name, email: dataEmail.email}],
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
         <!--[if !mso]><!-- -->
         <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet"> 
         <!--<![endif]--> 
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
                       <v:fill type="tile" src="https://stripo.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png" color="#f6f6f6" origin="0.5, 0" position="0.5,0"></v:fill>
                   </v:background>
               <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://qrcfge.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/7711511856111535.png" esd-img-prev-position="center top" style="background-position: center top;">
           <tbody>
            <tr>
             <td class="esd-email-paddings" valign="top">
              
              
              <table class="es-content" cellspacing="0" cellpadding="0" align="center">
               <tbody>
                <tr>
                 <td class="esd-stripe" align="center">
                  <table class="es-content-body" style="background-color: rgb(255, 255, 255);" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                   <tbody>
                    <tr>
                     <td class="esd-structure" style="background-color: rgb(243, 243, 243);" bgcolor="#f3f3f3" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                       <tbody>
                        <tr>
                         <td class="esd-container-frame" width="600" valign="top" align="center">
                          <table width="100%" cellspacing="0" cellpadding="0">
                           <tbody>
                            <tr>
                             <td class="esd-block-text es-p30t es-p15b es-p15r es-p15l" align="center"><h1 style="font-size: 38px;">Gracias por contactarme!</h1></td>
                            </tr>
                            <tr>
                             <td class="esd-block-image es-p15b" align="center" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://qrcfge.stripocdn.email/content/guids/CABINET_63fbbc11db6741389cc3292b09a63e6d/images/63541516368770627.png" alt="Handshake" title="Handshake" width="600"></a></td>
                            </tr>
                           </tbody>
                          </table></td>
                        </tr>
                       </tbody>
                      </table></td>
                    </tr>
                    <tr>
                     <td class="esd-structure es-p20t es-p10b es-p30r es-p30l" esd-general-paddings-checked="true" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                       <tbody>
                        <tr>
                         <td class="esd-container-frame" width="540" valign="top" align="center">
                          <table width="100%" cellspacing="0" cellpadding="0">
                           <tbody>
                            <tr>
                             <td class="esd-block-text es-p15t" align="left"><h3 style="line-height: 120%;">Hola ${dataEmail.name}!,</h3></td>
                            </tr>
                            <tr>
                             <td class="esd-block-text es-m-txt-c es-p10t es-p10b" align="left"><p>Espero que  te encuentres bien.
       Quiero expresar mi sincero agradecimiento por haberme contactado a través de mi
       portafolio.</p>
       
       <p>Es un verdadero placer recibir tu interés en
       mi trabajo y en lo que puedo ofrecerte como profesional. Valorando mucho el tiempo
       que has dedicado a explorar mi portafolio y considerarme para tus necesidades,
       quiero asegurarte que estoy completamente comprometido/a a brindarte el mejor
       servicio posible.</p>
       
       <p>Si necesitas más información, muestras
       adicionales de mi trabajo o cualquier otra consulta, no dudes en comunicármelo.
       Estoy aquí para ayudarte y colaborar en cualquier proyecto que tengas en mente.</p>
       
       <p>Espero con ansias la oportunidad de trabajar
       juntos y hacer realidad tus ideas.</p><p> </p>  Una vez más, gracias por tu confianza en mi
       trabajo y por considerarme para esta oportunidad.<p style="line-height: 150%;"><br></p></td>
                            </tr>
                           </tbody>
                          </table></td>
                        </tr>
                       </tbody>
                      </table></td>
                    </tr>
                    
                    
                    
                    <tr>
                     <td class="esd-structure es-p10t es-p20b es-p30r es-p30l" esd-general-paddings-checked="true" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                       <tbody>
                        <tr>
                         <td class="esd-container-frame" width="540" valign="top" align="center">
                          <table width="100%" cellspacing="0" cellpadding="0">
                           <tbody>
                            <tr>
                             <td class="esd-block-text es-m-txt-c" align="left"><h3 style="line-height: 150%; color: #333333;">ATENTAMENTE, Bruno ken<br></h3></td>
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
        return data.body;
      },
      function (error: any) {
        return error;
      }
    );
  apiInstance
    .sendTransacEmail({
      subject: 'Mensaje de portafolio!',

      sender: {email: dataEmail.email, name: dataEmail.name},
      replyTo: {email: dataEmail.email, name: dataEmail.name},
      to: [{name: 'Bruno Ken', email: 'bruno_am_22@hotmail.com'}],
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
        return data.body;
      },
      function (error: any) {
        return error;
      }
    );
}
