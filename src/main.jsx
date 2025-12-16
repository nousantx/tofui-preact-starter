import { render } from 'preact'
import { App } from './app.jsx'
import 'virtual:tofui.css'
// import 'virtual:tenoxui:dev'

const isDev = import.meta.env.DEV

async function renderApp() {
  let DevStyler = ({ children }) => <>{children}</>

  if (isDev) DevStyler = (await import('./.dev/styler')).default

  render(
    <DevStyler>
      <App />
    </DevStyler>,
    document.getElementById('app')
  )
}

renderApp()
