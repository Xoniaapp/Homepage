import React from "react";

import { Navbar , Footer } from "../components/index";


function Privacy() {
  return (
<div>
  <h3 id="xonia-privacy-statement">Xonia Privacy Statement</h3>
  <p><strong>Issued on 12 December, 2021</strong></p>
  <p><strong><em>Thanks for trusting Xonia with your private information.</em></strong></p>
  <h4 id="what-information-xonia-collects-">What information Xonia collects?</h4>
  <hr />
  <p>We collect some basic information for providing you the service.</p>
  <ul>
    <li>Email Address</li>
  </ul>
  <h4 id="why-do-we-collect-this-">Why do we collect this?</h4>
  <hr />
  <p>We collect email address for providing you the basic service eg. Account registration, Recovery, etc.</p>
  <h4 id="what-information-we-don-t-collect">What information we don't collect</h4>
  <hr />
  <ul>
    <li>Name</li>
    <li>Age</li>
    <li>Religion</li>
    <li>Location</li>
    <li>Phone Number</li>
    <li>Social Security Numbers</li>
    <li>IP Address</li>
  </ul>
  <p>Xonia does not request or intentionally collect any sensitive personal information, we realize that you might store this kind of information in your account, eg message. If you store any sensitive personal information on our servers, you are consenting to our storage of that information on our servers, which are located in Germany.</p>
  <p>If <strong>you're a child under the age of 13</strong>, you may not have an account on Xonia. Xonia does not knowingly collect information from or direct any of our content specifically to children under 13. If we learn or have reason to suspect that you are a user who is under the age of 13, we will unfortunately have to close your account. </p>
  <h4 id="how-we-share-the-information-we-collect">How we share the information we collect</h4>
  <hr />
  <p>Simply, <strong>We don't trade, share nor sale any information you provide us with.</strong></p>
  <h4 id="third-party-services">Third party Services</h4>
  <hr />
  <p>We use the following services.</p>
  <ul>
    <li>Cloudflare</li>
    <li>Vercel</li>
    <li>DigitalOcean</li>
    <li>Linode</li>
    <li>Sentry</li>
    <li>Umami</li>
    <li>Ghost CMS</li>
    <li>Discourse</li>
  </ul>
</div>
  );
}

export default Privacy;
