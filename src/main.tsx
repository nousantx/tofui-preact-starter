import { render } from 'preact'
import { App } from './app.tsx'
import 'virtual:tofui.css'
// import 'virtual:tenoxui:dev'
import type { ComponentChildren } from 'preact'

const isDev = import.meta.env.DEV

async function renderApp() {
  let DevStyler: any = ({ children }: { children: ComponentChildren }) => <>{children}</>

  if (isDev) DevStyler = (await import('./.dev/styler')).default

  render(
    <DevStyler>
      <App />
    </DevStyler>,
    document.getElementById('app')!
  )
}

renderApp()
