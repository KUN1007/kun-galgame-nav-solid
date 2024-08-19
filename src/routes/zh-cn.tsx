import { A } from '@solidjs/router'
import Counter from '~/components/Counter'

export default function About() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-4xl text-kun-blue5-light font-thin my-16">
        鲲 Galgame 导航页
      </h1>
      <Counter />
      <p class="mt-8">
        访问{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          rel="noreferrer"
          class="text-kun-blue5-light hover:underline"
        >
          kungal.com
        </a>{' '}
        以获取更多信息
      </p>
      <p class="my-4">
        <A href="/" class="text-kun-blue5-light hover:underline">
          English
        </A>
        {' - '}
        <span>简体中文</span>
      </p>
    </main>
  )
}
