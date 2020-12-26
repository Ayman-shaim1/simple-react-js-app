import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter,FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/about">About us</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>dolla</SocialLogo>
                <WebSiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved. </WebSiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Linkdin">
                        <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
