import { Star } from "lucide-react"

function HeroSection() {
    const founders = [
        "/person/hero/p1.jpeg",
        "/person/hero/p2.jpeg",
        "/person/hero/p3.jpeg",
        "/person/hero/p4.jpeg",
        "/person/hero/p5.webp",
    ]
    return (
        <div className='inter-300 flex flex-row pt-40 max-w-6xl justify-between mx-auto gap-x-10'>

            <div className="flex flex-col gap-y-4">
                <h1 className="inter-700 tracking-tight text-6xl max-w-xl text-balance">Ship landing pages at lightning speed.</h1>
                <p className="text-[#737373] max-w-2xl text-lg">200+ production-ready components, blocks and templates that make your site feel like you hired a design team. Copy, paste, customize, no wrestling with Framer Motion animations or Tailwind styling.</p>
                <div className="flex flex-row gap-x-2 mt-5 inter-400">
                    <button className="bg-black text-white font-bold px-5 py-4 rounded-lg">Browse Components</button>
                    <button className="border border-gray-300 px-9 py-4 rounded-lg inset-shadow-amber-50 inset-shadow-sm">Get All-Access</button>
                </div>
            </div>

            <div className="flex flex-col justify-end space-y-3">
                <p className="max-w-xs text-balance text-[#737373] tracking-wide">Trusted by 120,000+ founders developers and creators</p>
                <div className="flex flex-row -space-x-2">
                    {founders.map((founder, index) => (
                        <div key={index} className="w-14 h-14 border-3 border-white rounded-full">
                            <img src={founder} alt="" className="w-full h-full object-center object-cover rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection