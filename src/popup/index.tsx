import "~base.css"
import "~style.css"
import "./index.css"
import { useAtom } from "jotai"
import {settingAtom} from "~state"
function IndexPopup() {
	const [setting, setSetting] = useAtom(settingAtom)
	const updateWidth = (width)=>{
		console.log('width', width)
		setSetting((prev)=>({
			...prev,
			setting:{
				...prev,
				width
			}
		}))
	}
	const updateHeight = (height)=>{
		setSetting((prev)=>({
			...prev,
			setting:{
				...prev,
				height
			}
		}))
	}
	const updateAdaption = (adaption)=>{
		setSetting((prev)=>({
			...prev,
			setting:{
				...prev,
				adaption
			}
		}))
	}
	// Consider refactor it elegantly with ImmerJS!
  return (
    <div className="flex gap-y-2 flex-col p-5 items-start w-[300px] h-[220px]">
			<h2 className="text-lg font-semibold">Wallpaper Abyss Helper Setting</h2>
			<p><span>Adaption:</span>
				<select value={setting.adaption} onChange={(e)=>setSetting({
					width: setting.width,
					height: setting.height,
					adaption: e.target.value
			})}>	
					<option value="cropped">Crop</option>
					<option value="stretched">Stretch</option>
				</select>
			</p>
			<p><span>Width:</span> <input type="number" value={setting.width} onChange={(e)=>updateWidth(e.target.value)}/>px</p>
			<p><span>Height:</span> <input type="text" value={setting.height} 
			onChange={(e)=>updateHeight(e.target.value)}/>px</p>
			<p><button className="btn px-3 py-2 text-white bg-blue-500 hover:bg-blue-300 rounded"
			onClick={
				()=>{
					setSetting({
						width: 1000,
						height: 2000,
						adaption: "hello"
				})
				}
			}>Save</button></p>
    </div>
  )
}


export default IndexPopup
