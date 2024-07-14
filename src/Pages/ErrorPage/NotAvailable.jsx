import LottieAnimation from '@/components/ui/LottieAnimation'
import Notavail from '../../assets/Animation/Animation - 1720622702782.json'

export default function NotAvailable({title}) {
    return (
        <div className="flex flex-col mt-5 justify-center  bg-background text-foreground">
            <LottieAnimation animationData={Notavail} className="bg-white" height='350px'  />
          <div className='flex flex-col justify-center items-center'>
          <h1 className="mt-4 text-xl font-bold dark:text-yellow-300">{title}</h1>
          <p className="mt-2 text-center text-muted-foreground text-gray-400">Let's order some items and make your order history list heavy</p>
          </div>
        </div>  
    )
}