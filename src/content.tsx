import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo" 
import { CountButton } from "~features/count-button"
import { settingAtom } from "~state"
import { useAtom, getDefaultStore} from "jotai"
import store from "~store"
import "~base.css"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

console.log('defaultStore', store)

const PlasmoOverlay = () => {
	const [setting] = useAtom(settingAtom)	// store.set(33333)
  return (
    <div className="z-50 flex fixed top-[800px] right-8">
			<p>width: {setting.width}</p>
			<p>height: {setting.height}</p>
			<p>adaption: {setting.adaption}</p>
      <CountButton />
    </div>
  )
}

export default PlasmoOverlay
