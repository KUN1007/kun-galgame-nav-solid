import { Show } from 'solid-js'
import { A } from '@solidjs/router'
import { useAppState } from '~/AppContext'

export const KunAbout = () => {
  const context = useAppState()
  const { t } = context

  return (
    <div class="space-y-1">
      <Show when={context.locale === 'en-us'}>
        <p>
          This website is completely open-source! The source code is available
          on{' '}
          <a
            class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            href="https://github.com/KUN1007/kun-galgame-nav-solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . We built this site using the latest{' '}
          <a
            class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            href="https://start.solidjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SolidStart
          </a>{' '}
          framework
        </p>
        <p>
          We recommend you press `Ctrl + D` to bookmark this page to avoid
          losing contact with us.
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
        <p>
          <A
            href="/loli"
            class="underline underline-offset-2 decoration-kun-red dark:decoration-kun-blue5-dark"
          >
            {t('kun.loli')}
          </A>
        </p>
        <br />
        <p>
          Thank you to every organization and friend contributing to the
          open-source community!
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
          。 我们使用最现代的{' '}
          <a
            class="underline underline-offset-2 decoration-kun-blue5-light dark:decoration-kun-blue5-dark"
            href="https://start.solidjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SolidStart
          </a>{' '}
          框架编写该网站
        </p>
        <p>我们建议您 `Ctrl + D` 收藏该网页以防止与我们失去联系</p>
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
        <p>
          <A
            href="/loli"
            class="underline underline-offset-2 decoration-kun-red dark:decoration-kun-blue5-dark"
          >
            {t('kun.loli')}
          </A>
        </p>
        <br />
        <p>感谢为开源事业做出贡献的每个组织和朋友！</p>
      </Show>
    </div>
  )
}
