import { useAppState } from '~/AppContext'
import { NavigationCards } from '~/components/NavigationCards'
import { KunHeader } from '~/components/KunHeader'
import { KunFooter } from '~/components/KunFooter'
import { KunAbout } from '~/components/KunAbout'
import { CardContainer } from '~/components/CardContainer'
import type { KunCard } from '~/types/card'

const siteData: KunCard[] = [
  {
    title: 'forum',
    details: 'forum',
    link: 'https://www.kungal.com',
    githubLink: 'https://github.com/KUN1007/kun-galgame-nuxt3'
  },
  {
    title: 'backup',
    details: 'backup',
    link: 'https://www.kungal.com',
    githubLink: 'https://github.com/KUN1007/kun-galgame-nuxt3'
  }
]

const subSiteData: KunCard[] = [
  {
    title: 'sticker',
    details: 'sticker',
    link: 'https://sticker.kungal.com',
    githubLink: 'https://github.com/KUN1007/kun-galgame-stickers-sveltekit'
  },
  {
    title: 'documents',
    details: 'documents',
    link: 'https://soft.moe/kun-visualnovel-docs/kun-forum.html',
    githubLink: 'https://github.com/KUN1007/soft.moe'
  },
  {
    title: 'down',
    details: 'down',
    link: 'https://down.kungal.com',
    githubLink: 'https://github.com/KUN1007/kun-galgame-down-page'
  },
  {
    title: 'nav',
    details: 'nav',
    link: 'https://nav.kungal.org',
    githubLink: 'https://github.com/KUN1007/kun-galgame-nav-solid'
  }
]
export default function Home() {
  const context = useAppState()
  const { t } = context

  return (
    <main class="mx-auto max-w-5x p-4">
      <h1 class="max-6-xs text-center text-4xl font-medium text-kun-blue5-light dark:text-kun-blue5-dark my-16">
        {t('kun.title')}
      </h1>

      <NavigationCards
        cards={siteData}
        title={<KunHeader size={2} title={t('kun.main')} />}
      />

      <NavigationCards
        cards={subSiteData}
        title={<KunHeader size={2} title={t('kun.sub')} class="mt-8" />}
      />

      <CardContainer
        content={
          <>
            <KunHeader size={2} title={t('kun.about')} class="mt-8" />
            <KunAbout />
          </>
        }
      />

      <KunFooter />
    </main>
  )
}
