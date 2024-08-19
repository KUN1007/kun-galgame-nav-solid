import { Icon } from '@iconify-icon/solid'
import { ParentComponent, createSignal } from 'solid-js'
import Dismiss from 'solid-dismiss'
import { Locale, useAppState } from '../AppContext'
import { entries } from '../utils/entries'

const langs: Record<Locale, string> = {
  'en-us': 'English',
  'zh-cn': '简体中文'
}

export const LanguageSelector: ParentComponent<{}> = () => {
  let langBtnDesktop!: HTMLButtonElement
  const [showLangs, toggleLangs] = createSignal(false)
  const ctx = useAppState()

  return (
    <>
      <button
        aria-label="Select Language"
        ref={langBtnDesktop}
        class="flex justify-center items-center border px-3 py-2 ml-4 rounded-xl text-xl"
      >
        <span>
          <Icon icon="lucide:languages" />
        </span>
      </button>
      <Dismiss
        menuButton={[langBtnDesktop]}
        open={showLangs}
        setOpen={toggleLangs}
        class="left-0 right-0 bottom-0 absolute flex justify-end"
      >
        <div class="absolute right-2 top-2 bg-kun-bg-light dark:bg-kun-bg-dark p-2 rounded-xl">
          {/* eslint-disable-next-line */}
          {entries(langs).map(([lang, label]) => (
            <button
              class={`flex items-center justify-center p-2 mb-1 rounded-xl w-full ${
                lang == ctx.locale
                  ? 'bg-kun-blue5-light text-kun-bg-light'
                  : 'hover:bg-kun-blue0-light hover:dark:bg-kun-blue0-dark'
              }`}
              onClick={() => {
                ctx.setLocale(lang)
                toggleLangs(false)
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </Dismiss>
    </>
  )
}
