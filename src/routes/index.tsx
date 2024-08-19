import { A } from '@solidjs/router'
import Counter from '~/components/Counter'
import { useAppState } from '../AppContext'

export default function Home() {
  const context = useAppState()
  const { t } = context

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-4xl text-kun-blue5-light dark:text-kun-blue5-dark  font-thin my-16">
        {t('kun.title')}
      </h1>
    </main>
  )
}
