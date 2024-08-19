import { Icon } from '@iconify-icon/solid'
import { ModeToggle } from './ModeToggle'
import { useAppState } from '~/AppContext'
import { LanguageSelector } from './LanguageSelector'

export default function Nav() {
  const context = useAppState()
  const { t } = context

  return (
    <nav class="bg-opacity-50 border-b backdrop-blur-sm flex justify-between items-center px-8 py-2 h-16">
      <a
        aria-label={`${t('kun.title')} ${t('kun.github')}`}
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
