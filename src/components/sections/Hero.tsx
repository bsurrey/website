import Github from '@/components/icons/Github'
import LinkedIn from '@/components/icons/LinkedIn'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="w-full bg-lime-100 pb-24 pt-44 text-black dark:bg-neutral-900 dark:text-white">
      <div className="mx-auto flex max-w-4xl px-8 max-md:gap-4 max-sm:flex-col">
        <div className="mr-auto flex flex-col gap-4 md:gap-6">
          <h1 className="text-4xl font-bold uppercase leading-[110%] md:text-[5rem]">
            Benjamin Surrey
          </h1>
          <h2 className={'text-xl font-semibold uppercase md:text-3xl'}>Full-Stack engineer</h2>
          <p className="order-first w-fit animate-[wave_5s_ease-in-out_infinite] text-6xl">👋</p>

          <div className="font-light md:text-xl">
            <p>Crafting elegant solutions to complex problems.</p>
            <p>With 4+ years of experience in web development.</p>
          </div>
        </div>

        <div className={'flex gap-6 sm:mt-auto sm:flex-col md:gap-4'}>
          <Link href="https://github.com/bsurrey" target="_blank">
            <Github className="size-8 dark:fill-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/benjamin-surr/" target={'_blank'}>
            <LinkedIn className="size-8 dark:fill-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
