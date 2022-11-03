const DEFAULT_TEMPLATES: {
  name: string;
  subject: string;
  text: string;
  style: string;
  type: 'email' | 'slack' | 'sms';
}[] = [
  {
    name: 'example-template-action',
    subject: 'Confirm your email',
    text: `<body><meta name="viewport" content="width=device-width"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><title class="text_droppable">Actionable emails e.g. reset password
    </title><table bgcolor="rgb(246, 246, 246)" id="i8xv" width="100%" class="body-wrap"><tbody id="inkw"><tr id="iqco"><td valign="top" id="ibsc">
          </td><td width="600" valign="top" id="i3xb" class="container"><div id="iw36g" class="content"><table width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope="" itemtype="http://schema.org/ConfirmAction" bgcolor="rgb(255, 255, 255)" id="i7hc5" class="main"><tbody id="i1u7k"><tr id="il8gp"><td valign="top" id="ind6c" class="content-wrap"><meta itemprop="name" content="Confirm Email" id="ivw4p"/><table width="100%" cellpadding="0" cellspacing="0" id="ib6jq"><tbody id="i1g5f"><tr id="idcwj"><td valign="top" id="ilzeo" class="content-block">
                              Please confirm your email address by clicking the link below.
                            </td></tr><tr id="iwebl"><td valign="top" id="ioj2a" class="content-block">
                              We may need to send you critical information about our service and it is important that we have an accurate email address.
                            </td></tr><tr id="ij372"><td itemprop="handler" itemscope="" itemtype="http://schema.org/HttpActionHandler" valign="top" id="i2oil" class="content-block"><a href="http://www.mailgun.com" itemprop="url" id="iaso2" class="btn-primary">Confirm email address</a></td></tr><tr id="ivbg6">
                          </tr></tbody></table><div class="text_droppable" id="i4mzx">Thanks
                      </div></td></tr></tbody></table><div id="iw344" class="footer"><table width="100%" id="ij86o"><tbody id="i42rj"><tr id="i6s3u">
                    </tr></tbody></table></div></div></td><td valign="top" id="iqmdo">
          </td></tr></tbody></table></body>`,
    style: `* { box-sizing: border-box; } body {margin: 0;}#i8xv{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;width:100%;background-color:rgb(246, 246, 246);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#inkw{box-sizing:border-box;}#iqco{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ibsc{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i3xb{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;display:block;max-width:600px;clear:both;}#iw36g{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#i7hc5{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(255, 255, 255);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(233, 233, 233);border-right-color:rgb(233, 233, 233);border-bottom-color:rgb(233, 233, 233);border-left-color:rgb(233, 233, 233);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;}#i1u7k{box-sizing:border-box;}#il8gp{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ind6c{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#ib6jq{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i1g5f{box-sizing:border-box;}#idcwj{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ilzeo{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#iwebl{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ioj2a{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#ij372{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i2oil{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#iaso2{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;color:rgb(255, 255, 255);text-decoration-line:none;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;line-height:2em;font-weight:bold;text-align:center;cursor:pointer;display:inline-block;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;text-transform:capitalize;background-color:rgb(52, 142, 218);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;border-top-color:rgb(52, 142, 218);border-right-color:rgb(52, 142, 218);border-bottom-color:rgb(52, 142, 218);border-left-color:rgb(52, 142, 218);border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:10px;border-right-width:20px;border-bottom-width:10px;border-left-width:20px;}#ivbg6{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i4mzx{box-sizing:border-box;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#iw344{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;width:100%;clear:both;color:rgb(153, 153, 153);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#ij86o{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i42rj{box-sizing:border-box;}#i6s3u{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iqmdo{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@media only screen and (max-width: 640px){body{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;}h1{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:22px !important;}h2{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:18px !important;}h3{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:16px !important;}h4{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;}.container{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;width:100% !important;}.content{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;}.content-wrap{padding-top:10px !important;padding-right:10px !important;padding-bottom:10px !important;padding-left:10px !important;}}`,
    type: 'email',
  },
  {
    name: 'example-template-bill',
    subject: 'Bill',
    text: `<body id="i7eb"><meta name="viewport" content="width=device-width"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><title class="text_droppable">Billing e.g. invoices and receipts
    </title><table bgcolor="rgb(246, 246, 246)" id="i877" width="100%" class="body-wrap"><tbody id="i04u"><tr id="iiwy"><td valign="top" id="ic3s">
          </td><td width="600" valign="top" id="ielk" class="container"><div id="inbxq" class="content"><table width="100%" cellpadding="0" cellspacing="0" bgcolor="rgb(255, 255, 255)" id="i43ij" class="main"><tbody id="iong9"><tr id="izde2"><td align="center" valign="top" id="ifntx" class="content-wrap aligncenter"><table width="100%" cellpadding="0" cellspacing="0" id="i9uiy"><tbody id="ihrna"><tr id="i4fnl"><td valign="top" id="i49yf" class="content-block"><h1 class="aligncenter" align="center" id="ibkmm">$33.98 Paid
                              </h1></td></tr><tr id="i1m4i"><td valign="top" id="i0qei" class="content-block"><h2 class="aligncenter" align="center" id="ibuq7">Thanks for using Acme Inc.
                              </h2></td></tr><tr id="i6dkk"><td align="center" valign="top" id="i4lmg" class="content-block aligncenter"><table id="ir5fr" width="80%" align="left" class="invoice"><tbody id="ietaq"><tr id="i8aas"><td valign="top" id="i9p96">Lee Munroe
                                      <br id="i2ndg"/>Invoice #12345
                                      <br id="ijnaq"/>June 01 2014
                                    </td></tr><tr id="i8nh2"><td valign="top" id="i703j"><table cellpadding="0" cellspacing="0" id="i5qu5" width="100%" class="invoice-items"><tbody id="ipfrs"><tr id="ig2qk"><td valign="top" id="idw91">Service 1
                                            </td><td align="right" valign="top" id="idkei" class="alignright">$ 19.99
                                            </td></tr><tr id="i51dr"><td valign="top" id="iwfdi">Service 2
                                            </td><td align="right" valign="top" id="in5qa" class="alignright">$ 9.99
                                            </td></tr><tr id="idyi3"><td valign="top" id="ih2e1">Service 3
                                            </td><td align="right" valign="top" id="i8vrl" class="alignright">$ 4.00
                                            </td></tr><tr id="iwdkm" class="total"><td width="80%" align="right" valign="top" id="itp28" class="alignright">Total
                                            </td><td align="right" valign="top" id="i8kn9" class="alignright">$ 33.98
                                            </td></tr></tbody></table></td></tr></tbody></table></td></tr><tr id="ilbn5"><td align="center" valign="top" id="iba5b" class="content-block aligncenter"><a href="http://www.mailgun.com" id="iszue">View in browser</a></td></tr><tr id="ip78z"><td align="center" valign="top" id="ioj0d" class="content-block aligncenter">
                              Acme Inc. 123 Van Ness, San Francisco 94102
                            </td></tr></tbody></table></td></tr></tbody></table><div id="ix2z1" class="footer"><table width="100%" id="iac39"><tbody id="iwhxg"><tr id="is7qf"><td align="center" valign="top" id="i7t7l" class="aligncenter content-block">Questions? Email 
                        <a href="mailto:" id="i8s1f">support@acme.inc</a></td></tr></tbody></table></div></div></td><td valign="top" id="icu73">
          </td></tr></tbody></table></body>`,
    style: `* { box-sizing: border-box; } body {margin: 0;}#i877{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;width:100%;background-color:rgb(246, 246, 246);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i04u{box-sizing:border-box;}#iiwy{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ic3s{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ielk{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;display:block;max-width:600px;clear:both;}#inbxq{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#i43ij{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(255, 255, 255);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(233, 233, 233);border-right-color:rgb(233, 233, 233);border-bottom-color:rgb(233, 233, 233);border-left-color:rgb(233, 233, 233);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;}#iong9{box-sizing:border-box;}#izde2{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ifntx{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:center;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#i9uiy{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ihrna{box-sizing:border-box;}#i4fnl{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i49yf{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#ibkmm{font-family:'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;box-sizing:border-box;font-size:32px;color:rgb(0, 0, 0);line-height:1.2em;font-weight:500;text-align:center;margin-top:40px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i1m4i{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i0qei{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#ibuq7{font-family:'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;box-sizing:border-box;font-size:24px;color:rgb(0, 0, 0);line-height:1.2em;font-weight:400;text-align:center;margin-top:40px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i6dkk{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i4lmg{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:center;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#ir5fr{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;text-align:left;width:80%;margin-top:40px;margin-right:auto;margin-bottom:40px;margin-left:auto;}#ietaq{box-sizing:border-box;}#i8aas{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i9p96{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#i2ndg{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ijnaq{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i8nh2{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i703j{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#i5qu5{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;width:100%;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ipfrs{box-sizing:border-box;}#ig2qk{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#idw91{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;border-top-width:1px;border-top-color:rgb(238, 238, 238);border-top-style:solid;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#idkei{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:right;border-top-width:1px;border-top-color:rgb(238, 238, 238);border-top-style:solid;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#i51dr{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iwfdi{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;border-top-width:1px;border-top-color:rgb(238, 238, 238);border-top-style:solid;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#in5qa{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:right;border-top-width:1px;border-top-color:rgb(238, 238, 238);border-top-style:solid;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#idyi3{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ih2e1{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;border-top-width:1px;border-top-color:rgb(238, 238, 238);border-top-style:solid;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#i8vrl{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:right;border-top-width:1px;border-top-color:rgb(238, 238, 238);border-top-style:solid;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#iwdkm{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#itp28{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:right;border-top-width:2px;border-top-color:rgb(51, 51, 51);border-top-style:solid;border-bottom-color:rgb(51, 51, 51);border-bottom-width:2px;border-bottom-style:solid;font-weight:700;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#i8kn9{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:right;border-top-width:2px;border-top-color:rgb(51, 51, 51);border-top-style:solid;border-bottom-color:rgb(51, 51, 51);border-bottom-width:2px;border-bottom-style:solid;font-weight:700;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:0px;}#ilbn5{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iba5b{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:center;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#iszue{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;color:rgb(52, 142, 218);text-decoration-line:underline;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ip78z{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ioj0d{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;text-align:center;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#ix2z1{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;width:100%;clear:both;color:rgb(153, 153, 153);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#iac39{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iwhxg{box-sizing:border-box;}#is7qf{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i7t7l{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:12px;vertical-align:top;color:rgb(153, 153, 153);text-align:center;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#i8s1f{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:12px;color:rgb(153, 153, 153);text-decoration-line:underline;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#icu73{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@media only screen and (max-width: 640px){body{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;}h1{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:22px !important;}h2{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:18px !important;}h3{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:16px !important;}h4{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;}.container{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;width:100% !important;}.content{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;}.content-wrap{padding-top:10px !important;padding-right:10px !important;padding-bottom:10px !important;padding-left:10px !important;}.invoice{width:100% !important;}}`,
    type: 'email',
  },
  {
    name: 'example-template-alert',
    subject: 'Alert',
    text: `<body><meta name="viewport" content="width=device-width"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><title class="text_droppable">Alerts e.g. approaching your limit
    </title><table bgcolor="rgb(246, 246, 246)" id="ickk" width="100%" class="body-wrap"><tbody id="i97z"><tr id="ilf4"><td valign="top" id="inb3">
          </td><td width="600" valign="top" id="iewy" class="container"><div id="i0bi1" class="content"><table width="100%" cellpadding="0" cellspacing="0" bgcolor="rgb(255, 255, 255)" id="ikfmj" class="main"><tbody id="i5mlb"><tr id="iiq2m"><td align="center" bgcolor="rgb(255, 159, 0)" valign="top" id="ieyn4" class="alert alert-warning">
                      Warning: You&#039;re approaching your limit. Please upgrade.
                    </td></tr><tr id="icsmo"><td valign="top" id="iztr5" class="content-wrap"><table width="100%" cellpadding="0" cellspacing="0" id="i0s1a"><tbody id="iglxg"><tr id="i3qh2"><td valign="top" id="imi0v" class="content-block">
                              You have 
                              <strong class="text_droppable" id="ifoug">1 free report</strong> remaining.
                            </td></tr><tr id="iibkc"><td valign="top" id="i8n6u" class="content-block">
                              Add your credit card now to upgrade your account to a premium plan to ensure you don&#039;t miss out on any reports.
                            </td></tr><tr id="ihjyr"><td valign="top" id="i87rn" class="content-block"><a href="http://www.mailgun.com" id="im7he" class="btn-primary">Upgrade my account</a></td></tr><tr id="irxmk"><td valign="top" id="idriv" class="content-block">
                              Thanks for choosing Acme Inc.
                            </td></tr></tbody></table></td></tr></tbody></table><div id="i78z2" class="footer"><table width="100%" id="im2zh"><tbody id="i4usf"><tr id="iw6bt"><td align="center" valign="top" id="ig75j" class="aligncenter content-block"><a href="http://www.mailgun.com" id="iqabe">Unsubscribe</a> from these alerts.
                      </td></tr></tbody></table></div></div></td><td valign="top" id="ij1ml">
          </td></tr></tbody></table></body>`,
    style: `* { box-sizing: border-box; } body {margin: 0;}#ickk{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;width:100%;background-color:rgb(246, 246, 246);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i44d{box-sizing:border-box;}#ilf4{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#inb3{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iewy{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;display:block;max-width:600px;clear:both;}#i0bi1{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin-top:0px;margin-right:auto;margin-bottom:0px;margin-left:auto;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#ikfmj{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(255, 255, 255);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(233, 233, 233);border-right-color:rgb(233, 233, 233);border-bottom-color:rgb(233, 233, 233);border-left-color:rgb(233, 233, 233);border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;}#i661j{box-sizing:border-box;}#iiq2m{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ieyn4{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:16px;vertical-align:top;color:rgb(255, 255, 255);font-weight:500;text-align:center;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(255, 159, 0);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#icsmo{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iztr5{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#i0s1a{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ij8zk{box-sizing:border-box;}#i3qh2{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#imi0v{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#ifoug{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#iibkc{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i8n6u{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#ihjyr{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i87rn{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#im7he{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;color:rgb(255, 255, 255);text-decoration-line:none;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;line-height:2em;font-weight:bold;text-align:center;cursor:pointer;display:inline-block;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;text-transform:capitalize;background-color:rgb(52, 142, 218);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;border-top-color:rgb(52, 142, 218);border-right-color:rgb(52, 142, 218);border-bottom-color:rgb(52, 142, 218);border-left-color:rgb(52, 142, 218);border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:10px;border-right-width:20px;border-bottom-width:10px;border-left-width:20px;}#irxmk{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#idriv{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#i78z2{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;width:100%;clear:both;color:rgb(153, 153, 153);margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;}#im2zh{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#i65du{box-sizing:border-box;}#iw6bt{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ig75j{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:12px;vertical-align:top;color:rgb(153, 153, 153);text-align:center;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:20px;padding-left:0px;}#iqabe{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:12px;color:rgb(153, 153, 153);text-decoration-line:underline;text-decoration-thickness:initial;text-decoration-style:initial;text-decoration-color:initial;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}#ij1ml{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;box-sizing:border-box;font-size:14px;vertical-align:top;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}@media only screen and (max-width: 640px){body{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;}h1{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:22px !important;}h2{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:18px !important;}h3{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;font-size:16px !important;}h4{font-weight:800 !important;margin-top:20px !important;margin-right:0px !important;margin-bottom:5px !important;margin-left:0px !important;}.container{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;width:100% !important;}.content{padding-top:0px !important;padding-right:0px !important;padding-bottom:0px !important;padding-left:0px !important;}.content-wrap{padding-top:10px !important;padding-right:10px !important;padding-bottom:10px !important;padding-left:10px !important;}}`,
    type: 'email',
  },
  {
    name: 'example-template-onboarding-simple',
    subject: 'Welcome to ',
    text: `<body id="i1nu"><div class="text_droppable" id="i2yf">Hey <br id="inue" draggable="true"/><br id="izpm" draggable="true"/>Welcome to . If you have any questions or feedback shoot us an email at <br id="iapj" draggable="true"/><br id="ixgi" draggable="true"/>Thanks!</div></body>`,
    style: `* { box-sizing: border-box; } body {margin: 0;}#i2yf{padding:10px;}`,
    type: 'email',
  },
];

export { DEFAULT_TEMPLATES };