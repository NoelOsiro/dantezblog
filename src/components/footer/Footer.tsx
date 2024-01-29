import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  title: string;
  logoSrc: string;
  descr: string;
}
const links = [
  { title: "Homepage", href: "/" },
  { title: "Blog", href: "/" },
  { title: "About", href: "/" },
  { title: "Contact", href: "/" },
];

const tags = [
  { title: "Style", href: "/" },
  { title: "Fashion", href: "/" },
  { title: "Coding", href: "/" },
  { title: "Travel", href: "/" },
];

const socialLinks = [
  { title: "Facebook", href: "/" },
  { title: "Instagram", href: "/" },
  { title: "Tiktok", href: "/" },
  { title: "Youtube", href: "/" },
];
const Footer: React.FC<FooterProps> = ({title, logoSrc, descr}) => {
  return (
    <div className={styles.container}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <Image src={logoSrc} alt="lama blog" width={50} height={50} />
        <h1 className={styles.logoText}>{title}</h1>
      </div>
      <p className={styles.desc}>{descr}
      </p>
      <div className={styles.icons}>
        <Image src="/facebook.png" alt="" width={18} height={18} />
        <Image src="/instagram.png" alt="" width={18} height={18} />
        <Image src="/tiktok.png" alt="" width={18} height={18} />
        <Image src="/youtube.png" alt="" width={18} height={18} />
      </div>
    </div>
    <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        {links.map((link, index) => (
          <Link key={index} href={link.href}>{link.title}</Link>
        ))}
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        {tags.map((tag, index) => (
          <Link key={index} href={tag.href}>{tag.title}</Link>
        ))}
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        {socialLinks.map((socialLink, index) => (
          <Link key={index} href={socialLink.href}>{socialLink.title}</Link>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Footer;
