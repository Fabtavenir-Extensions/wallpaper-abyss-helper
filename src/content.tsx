import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo" 
import {useStorage} from '@plasmohq/storage/hook'
import "~base.css"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
const PlasmoOverlay = () => {
	const [width] = useStorage<number>('width')
	const [height] = useStorage<number>('height')
	const [adaption] = useStorage<string>('adaption')
  return (
    <div className="z-50 flex fixed top-[800px] right-8">
			<p>width: {width}</p>
			<p>height: {height}</p>
			<p>adaption: {adaption}</p>
    </div>
  )
}

export default PlasmoOverlay
