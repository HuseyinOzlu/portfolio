import Image from 'next/image'
import Superpeer from './components/icons/Superpeer'

export default function Home() {
  return (
    <main className="flex-1 py-24">
        <div className='z-10 mx-auto max-w-3xl flex flex-col m-full px-4'>
          <h1 className='text-4xl font-semibold tracking-tight'>
            Hello, I&apos;m Hüseyin <span className='animate-wiggle inline-block'>👋</span>
          </h1>

          <p className='mt-5 text-lg'>
            {`
            I'm a full-stack developer, content creator and a tech enthusiast.
            I love to share my knowledge and experiemnce with others. I'm student at`}
            <a 
            className='text-blue-500 hover:text-blue-700 transition-colors mx-2 ' 
            href='https://subu.edu.tr/' 
            target='_blank' 
            rel='noopener noreferrer'>SUAS
            </a>
            <span className='bg-neutral-50/30'>
              - A startup that helps ssales teams to increasa their sales by 
              analyzing thir conversation witjh their customers using{" "}
              <span className='font-bold'>AI.</span>
            </span>
          </p>

          <div className='mt-10'>
          <a 
            className='flex items-center space-x-2 hover:opacity-30 ' 
            href='https://superpeer.com/' 
            target='_blank' 
            rel='noopener noreferrer'
            >
              <Superpeer />
              <span>Book 30 min with me</span>
            </a>
          </div>
        </div>  
    </main>
  )
}
