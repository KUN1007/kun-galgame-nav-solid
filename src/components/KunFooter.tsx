import { Show } from 'solid-js'
import { useAppState } from '~/AppContext'

export const KunFooter = () => {
  const context = useAppState()

  return (
    <div class="m-auto max-w-5xl flex flex-col justify-center content-center">
      <div class="m-auto mb-8 mt-16 md:mt-32 text-center">
        <Show when={context.locale === 'en-us'}>
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
        </Show>

        <Show when={context.locale === 'zh-cn'}>
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
        </Show>
      </div>
    </div>
  )
}
