import { ParentComponent, createSignal } from 'solid-js'
import Dismiss from 'solid-dismiss'
import { Locale, useAppState } from '../AppContext'
import { entries } from '../utils/entries'

const langs: Record<Locale, string> = {
  'en-us': 'English',
  'zh-cn': '简体中文',
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
        class="dark:brightness-150 focus:color-red-500 bg-no-repeat bg-center bg-translate bg-24 hover:border-gray-500 cursor-pointer dark:border-gray-600 dark:hover:border-gray-500 px-6 pl-4 ml-2 rounded-md h-10 border border-solid-100 pt-4 text-sm my-3 w-full"
      />
      <Dismiss
        menuButton={[langBtnDesktop]}
        open={showLangs}
        setOpen={toggleLangs}
        class="container mx-auto left-0 right-0 bottom-0 absolute flex -mt-4 justify-end"
        animation={{
          appendToElement: 'menuPopup',
          enterClass: 'opacity-0 -translate-y-5',
          enterToClass: 'opacity-1 translate-y-0',
          exitClass: 'opacity-1 translate-y-0',
          exitToClass: 'opacity-0 -translate-y-4',
        }}
      >
        <div class="absolute w-full md:w-96 mt-2 md:ml-12 md:mr-5 border dark:border-solid-darkbg rounded-md transition-composite bg-white dark:bg-solid-darkLighterBg shadow-md">
          {entries(langs).map(([lang, label]) => (
            <button
              class="first:rounded-t hover:bg-solid-light hover:text-white last:rounded-b border-r p-3 text-sm border-b text-center dark:border-solid-darkbg/70 w-3/6"
              classList={{
                'bg-solid-medium': lang == ctx.locale,
                'hover:bg-kun-blue5-light': lang == ctx.locale,
              }}
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
