import { A } from '@solidjs/router'
import Counter from '~/components/Counter'

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-4xl text-kun-blue5-light font-thin my-16">
        KUN Visual Novel Navigation Page
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          rel="noreferrer"
          class="text-kun-blue5-light hover:underline"
        >
          kungal.com
        </a>{' '}
        to get more information.
      </p>
      <p class="my-4">
        <span>English</span>
        {' - '}
        <A href="/zh-cn" class="text-kun-blue5-light hover:underline">
          简体中文
        </A>{' '}
      </p>
    </main>
  )
}
