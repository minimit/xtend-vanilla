import 'core-js'
import { Xt } from 'xtendui'
import 'xtendui/src/core/overlay'

/**
 * gsap setup
 */

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.defaults({
  overwrite: 'auto',
})

gsap.config({
  force3D: false,
})

gsap.globalTimeline.timeScale(1000) // milliseconds instead of seconds

gsap.registerPlugin(ScrollToPlugin)

/**
 * Xt.vars
 */

Xt.vars = {
  timeMicro: 50,
  timeMini: 100,
  timeTiny: 250,
  timeSmall: 500,
  timeMedium: 750,
  timeLarge: 1000,
  timeBig: 1500,
  timeGiant: 2000,
  timeHuge: 3000,
}

if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  Xt.vars.timeMicro = 0
  Xt.vars.timeMini = 0
  Xt.vars.timeTiny = 0
  Xt.vars.timeSmall = 0
  Xt.vars.timeMedium = 0
  Xt.vars.timeLarge = 0
  Xt.vars.timeBig = 0
  Xt.vars.timeGiant = 0
  Xt.vars.timeHuge = 0
}

/**
 * favicon
 */

const changeMq = () => {
  const colorSchemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  const favicon = document.querySelector('#favicon')
  const faviconDark = document.querySelector('#favicon-dark')
  if (colorSchemeMq.matches) {
    favicon.remove()
    document.head.append(faviconDark)
  } else {
    document.head.append(favicon)
    faviconDark.remove()
  }
}

changeMq()