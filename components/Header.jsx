import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row">
      <div className="flex flex-grow max-w-2xl justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className='sm:mt-[-20px]'>
        <Image
          className="object-contain"
          src="/logo.png"
          alt="Hulu logo"
          width={100}
          height={30}
        />
      </div>
    </header>
  )
}

export default Header
