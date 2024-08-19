import { useLocation } from '@solidjs/router'
import { ModeToggle } from './ModeToggle'
import { LanguageSelector } from './LanguageSelector'

export default function Nav() {
  const location = useLocation()
  const active = (path: string) =>
    path == location.pathname
      ? 'border-kun-blue5-light'
      : 'border-transparent hover:border-kun-blue5-light'
  return (
    <nav class="bg-opacity-50 bg-kun-white backdrop-blur-sm flex">
      <ul class="container flex items-center p-3 text-gray-800">
        <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
          <a href="/">English</a>
        </li>
        <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
          <a href="/zh-cn">简体中文</a>
        </li>
      </ul>

      <div class="flex justify-center items-center">
        {' '}
        <ModeToggle />
        <LanguageSelector />
      </div>
    </nav>
  )
}
