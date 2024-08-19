import { Icon } from '@iconify-icon/solid'
import { VoidComponent } from 'solid-js'
import { useAppState } from '~/AppContext'

export const ModeToggle: VoidComponent = () => {
  const context = useAppState()
  const { t } = context
  const title = () => (context.isDark ? t('kun.lightMode') : t('kun.darkMode'))

  return (
    <button
      type="button"
      onClick={() => context.setDark(!context.isDark)}
      class="flex justify-center items-center border px-3 py-2 ml-4 rounded-xl text-xl"
      title={title()}
    >
      <span>
        <Icon
          icon={
            context.isDark
              ? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'
              : 'line-md:sunny-outline-to-moon-loop-transition'
          }
        />
      </span>
    </button>
  )
}
