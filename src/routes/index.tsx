import { useAppState } from '../AppContext'
import { NavigationCards } from '~/components/NavigationCards'
import { KunHeader } from '~/components/KunHeader'
import type { KunCard } from '../types/card'

const siteData: KunCard[] = [
  {
    title: 'main',
    details: '啊这可海星啊这可海星啊这可海星',
    link: 'https://www.kungal.com',
    linkText: '网页链接'
  },
  {
    title: 'sticker'
  }
]

const subSiteData: KunCard[] = [
  {
    title: 'sticker',
    link: 'https://sticker.kungal.com'
  },
  {
    title: 'documents',
    link: 'https://soft.moe/kun-visualnovel-docs/kun-forum.html'
  },
  {
    title: 'down',
    link: 'https://down.kungal.com'
  }
]
export default function Home() {
  const context = useAppState()
  const { t } = context

  return (
    <main class="mx-auto max-w-5x p-4">
      <h1 class="max-6-xs text-center text-4xl text-kun-blue5-light dark:text-kun-blue5-dark font-thin my-16">
        {t('kun.title')}
      </h1>

      <KunHeader size={2} title="主站" class="px-16" />
      <NavigationCards {...siteData} />

      <KunHeader size={2} title="子网站" class="px-16 mt-16" />
      <NavigationCards {...subSiteData} />
    </main>
  )
}
