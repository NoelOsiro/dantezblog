import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="flex gap-2.5 flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1 text-center text-4xl font-[bold]">lamablog</div>
      <div className="flex items-center gap-5 flex-1 text-xl">
        {/* <ThemeToggle /> */}
        <Link href="/" className=''>Homepage</Link>
        <Link href="/" className=''>Contact</Link>
        <Link href="/" className=''>About</Link>
        {/* <AuthLinks /> */}
      </div>
    </div>
  )
}

export default Navbar