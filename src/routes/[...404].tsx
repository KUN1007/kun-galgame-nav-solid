import Cookies from 'js-cookie'
import { createMemo, Show } from 'solid-js'
import { A } from '@solidjs/router'

const ErrorPage = () => {
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
        <h1 class="text-red-500">404</h1>
        <img src={stickerLink()} class="my-4" />
        <p class="text-center font-bold mb-4">Page not found</p>
        <A href="/" class="btn btn-danger">
          一键转生为萝莉
        </A>
      </div>
    </div>
  )
}

export default ErrorPage
