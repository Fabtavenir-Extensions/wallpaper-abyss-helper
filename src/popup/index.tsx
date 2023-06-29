import {useStorage} from '@plasmohq/storage/hook'
import { Storage } from '@plasmohq/storage'
import {useEffect, useState} from 'react'
import Setting from '~types/Setting'
import "~base.css"
import "~style.css"
import "./index.css"


function IndexPopup() {
	const [width, setWidth] = useStorage<number>('width')
	const [height, setHeight] = useStorage<number>('height')
	const [adaption, setAdaption] = useStorage<string>('adaption')
	const [setting, setSetting] = useState<Setting>({
		width: 1920,
		height: 1080,
		adaption: "cropped"
	})

	useEffect(()=>{
		if(!width || !height || !adaption) return
		setSetting({
			width: width,
			height: height,
			adaption: adaption 
		})
	},[width, height, adaption])
	const save = ()=>{
		setWidth(setting.width)
		setHeight(setting.height)
		setAdaption(setting.adaption)
	}
  return (
    <div className="flex gap-y-2 flex-col p-5 items-start w-[300px] h-[220px]">
			<h2 className="text-lg font-semibold">Wallpaper Abyss Helper Setting</h2>
			<p><span>Adaption:</span>
				<select value={setting.adaption} onChange={
					(e)=>setSetting({...setting, adaption:e.target.value})
					}>	
					<option value="cropped">Crop</option>
					<option value="stretched">Stretch</option>
				</select>
			</p>
			<p><span>Width:</span> <input type="text" value={setting.width} onChange={(e)=>setSetting({...setting, width: Number(e.target.value)})}/>px</p>
			<p><span>Height:</span> <input type="text" value={setting.height} 
			onChange={(e)=>setSetting({...setting, height:Number(e.target.value)})}/>px</p>
		
			<p><button className="btn px-3 py-2 text-white bg-blue-500 hover:bg-blue-300 rounded"
			onClick={
				save
			}>Save</button>
			</p>
    </div>
  )
}


export default IndexPopup
