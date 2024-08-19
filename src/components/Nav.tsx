import { Icon } from '@iconify-icon/solid'
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
    <nav class="bg-opacity-50 border-b backdrop-blur-sm flex justify-between items-center px-8 py-2 h-16">
      <a
        class="text-kun-blue5-light dark:text-kun-blue5-dark text-2xl cursor-pointer"
        href="https://github.com/KUN1007/kun-galgame-nav-solid"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="lucide:github" />
      </a>

      <div class="flex justify-center items-center">
        {' '}
        <ModeToggle />
        <LanguageSelector />
      </div>
    </nav>
  )
}
