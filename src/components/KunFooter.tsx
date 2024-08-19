import { Show } from 'solid-js'
import { useAppState } from '../AppContext'

export const KunFooter = () => {
  const context = useAppState()

  return (
    <div class="m-auto max-w-5xl flex flex-col justify-center content-center">
      <div class="m-auto mt-16 md:mt-32 text-center space-y-1">
        <Show when={context.locale === 'en-us'}>
          <p>This website is completely open-source!</p>
          <p>
            The source code is available on{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href="https://github.com/KUN1007/kun-galgame-nav-solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Powered by{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href={`https://www.kungal.com/${
                context.locale === 'en-us' ? '' : 'zh-cn'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              KUN Visual Novel Forum
            </a>{' '}
          </p>
          <p>
            You can join our{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href="https://t.me/kungalgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram group
            </a>
          </p>
        </Show>

        <Show when={context.locale === 'zh-cn'}>
          <p>
            本网站完全开源! 源码在{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href="https://github.com/KUN1007/kun-galgame-nav-solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            由{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href={`https://www.kungal.com/${
                context.locale === 'en-us' ? '' : 'zh-cn'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              鲲 Galgame 论坛
            </a>{' '}
            提供支持
          </p>
          <p>
            您可以加入我们的{' '}
            <a
              class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
              href="https://t.me/kungalgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram 群组
            </a>
          </p>
        </Show>
      </div>
    </div>
  )
}
