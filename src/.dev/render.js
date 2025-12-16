import config from '../styles/config'
import { init } from 'tofui'

export const { ui } = init(config)

export function render(node) {
  const elements = node.querySelectorAll('*')
  const classNames = []
  elements.forEach((element) => {
    if (element.classList && element.classList.length > 0) {
      Array.from(element.classList).forEach((className) => {
        classNames.push(className)
      })
    }
  })
  return ui.render(Array.from(new Set(classNames)))
}
