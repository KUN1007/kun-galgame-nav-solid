import { Component, JSX } from 'solid-js'

export const CardContainer: Component<{
  content: JSX.Element
}> = (props) => {
  return (
    <div class="relative px-6 sm:px-12 md:px-16">
      <div class="mx-auto max-w-5xl">{props.content}</div>
    </div>
  )
}
