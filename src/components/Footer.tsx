import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={'p-16'}>
      <div className="mx-auto flex max-w-4xl flex-col gap-5 text-center md:rounded-b-none">
        <Link href={'https://legal.benjaminsurrey.com'}>Legal notice (Impress)</Link>
        <p>
          © {currentYear} {process.env.PAGE_NAME}
        </p>
        <div className="space-y-2">
          <p>Created with ❤️ and by the help of these awesome Technologies:</p>
          <div className="mx-auto flex flex-col justify-center gap-4 gap-y-6 sm:flex-row">
            <span>Nextjs</span>
            <span>React</span>
            <span>Typescript</span>
            <span>Tailwind</span>
            <span>Heroicons</span>
            <span>zod</span>
            <span>Cloudflare Pages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
