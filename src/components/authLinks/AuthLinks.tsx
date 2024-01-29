"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";


const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status  = true;

  return (
    <>
      {!status  ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} >
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={() => setOpen(!open)}>Homepage</Link>
          <Link href="/about" onClick={() => setOpen(!open)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(!open)}>Contact</Link>
          {status  ? (
            <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
          </>
            
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;