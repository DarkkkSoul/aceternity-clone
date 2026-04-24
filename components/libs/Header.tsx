import { Circle, Moon, ShoppingCart } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <nav className='fixed flex flex-row items-center justify-between w-screen border-b border-gray-300 py-2 px-8 inter-300'>

            <section className='flex flex-row items-center gap-x-5.5 text-[0.96rem] tracking-wide text-[#737373]'>
                <div className='w-40'>
                    <img src="/icons/main-logo.png" alt="Aceternity Logo" />
                </div>
                <div className='px-2.5 rounded-lg py-2 hover:bg-gray-200/70 bg-transparent cursor-pointer transition-colors'>
                    <button className='cursor-pointer'>Components</button>
                </div>
                <div className='px-2.5 rounded-lg py-2 hover:bg-gray-200/70 bg-transparent cursor-pointer transition-colors'>
                    <button className='cursor-pointer'>Blocks</button>
                </div>
                <div className='px-2.5 rounded-lg py-2 hover:bg-gray-200/70 bg-transparent cursor-pointer transition-colors'>
                    <button className='cursor-pointer'>Templates</button>
                </div>
                <div className='px-2.5 rounded-lg py-2 hover:bg-gray-200/70 bg-transparent cursor-pointer transition-colors'>
                    <button className='cursor-pointer'>Pricing</button>
                </div>
                <div className='px-2.5 rounded-lg py-2 hover:bg-gray-200/70 bg-transparent cursor-pointer transition-colors'><button className='cursor-pointer'>Changelog</button></div>
            </section>

            <section className='flex flex-row items-center gap-x-5 text-[0.96rem] tracking-wide text-[#737373]'>
                <div className='flex items-center gap-x-3 border border-gray-300 px-3 py-1 rounded-lg shadow-md'>
                    <Circle size={16} color='#00000080' />
                    <span>Search</span>
                    <span className='bg-gray-200/80 border border-gray-300 rounded-md text-[0.7rem] px-1 py-0.5'>⌘ K</span>
                </div>
                <div className='px-2.5 rounded-lg py-2 hover:bg-gray-200/70 bg-transparent cursor-pointer transition-colors'>
                    <ShoppingCart color='#00000080' size={18} />
                </div>
                <div className='px-2.5 rounded-lg py-2 hover:bg-gray-200/70 bg-transparent cursor-pointer transition-colors'>
                    <Moon color='#00000080' size={18} />
                </div>
                <div className='hover:text-black transition-colors cursor-pointer'><button className='cursor-pointer'>Login</button></div>
                <div><button className='bg-black text-white px-5 py-2 rounded-lg'>Get All-Access</button></div>
            </section>
        </nav>
    )
}

export default Header