import { Icon } from '@iconify-icon/solid'
import { Component, createSignal, createMemo, JSX } from 'solid-js'
import '~/styles/header.css'

interface KunHeaderProps {
  size: number
  title: JSX.Element
  showHelp?: boolean
  help?: JSX.Element
  addition?: JSX.Element
  class?: string
}

export const KunHeader: Component<KunHeaderProps> = (props) => {
  const [isShow, setIsShow] = createSignal(false)
  const isShowHelp = createMemo(() => props.showHelp ?? false)

  return (
    <>
      <div
        class={`${props.class} kun-header before:content-['#'] before:text-kun-blue5-light before:dark:text-kun-blue5-dark size-${props.size}`}
      >
        {props.title}
        {isShowHelp() && (
          <span onClick={() => setIsShow(!isShow())}>
            <Icon icon="lucide:circle-help" />
          </span>
        )}
      </div>
      {props.addition}
      {isShow() && (
        <p class="kun-header-help before:text-kun-font-light before:dark:text-kun-font-dark">
          {props.help}
        </p>
      )}
    </>
  )
}
