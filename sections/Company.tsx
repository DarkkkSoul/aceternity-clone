import Image from 'next/image'

const companies = [
    { name: 'Google', logo: '/company/google.webp' },
    { name: 'Microsoft', logo: '/company/microsoft.webp' },
    { name: 'Cisco', logo: '/company/cisco.webp' },
    { name: 'Zomato', logo: '/company/zomato.webp' },
    { name: 'Better Auth', logo: '/company/better-auth.png' },
    { name: 'Great Frontend', logo: '/company/greatfrontend.webp' },
    { name: 'Strapi', logo: '/company/strapi.png' },
    { name: 'Neon', logo: '/company/neon.png' },
    { name: 'Workbase', logo: '/company/workbase.webp' },
    { name: 'Dovly', logo: '/company/dovly.webp' },
    { name: 'Nixtla', logo: '/company/nixtla.webp' },
    { name: 'PixAI', logo: '/company/pixai.webp' },
    { name: 'Writesonic', logo: '/company/writesonic.svg' },
    { name: 'Harvard', logo: '/company/harvard.png' },
    { name: 'Bath', logo: '/company/bath.webp' },
    { name: 'Nyu', logo: '/company/Nyu.webp' },
]

function Company() {
    return (
        <div className='space-y-15'>
            <h4 className='text-lg text-center text-[#737373]'>Used by companies and people working at</h4>
            <div className="grid grid-cols-8 max-w-6xl gap-x-12 gap-y-10 mx-auto">
                {companies.map((company) => (
                    <div key={company.name} className="flex flex-col items-center">
                        <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            width={110}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Company