import { createMemo } from 'solid-js'
import { A } from '@solidjs/router'
import { useAppState } from '~/AppContext'

const ErrorPage = () => {
  const context = useAppState()
  const { t } = context

  const randomNum = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min
  const randomPackIndex = randomNum(1, 5)
  const randomStickerIndex = randomNum(1, 80)
  const stickerLink = createMemo(
    () =>
      `https://sticker.kungal.com/stickers/KUNgal${randomPackIndex}/${randomStickerIndex}.webp`
  )

  return (
    <div class="flex flex-col h-full min-h-[calc(100vh-75px)] max-w-4xl mx-auto">
      <div class="m-auto p-4 flex flex-col items-center bg-opacity-50 bg-white rounded-lg shadow-lg">
        <h1 class="text-kun-red text-4xl font-medium">404</h1>
        <img src={stickerLink()} class="my-4" />
        <p class="text-center text-kun-red text-xl font-bold mb-4">
          {t('kun.404')}
        </p>
        <A href="/" class="text-kun-blue5-light">
          {t('kun.remake')}
        </A>
      </div>
    </div>
  )
}

export default ErrorPage
