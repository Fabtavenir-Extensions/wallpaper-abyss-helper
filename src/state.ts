import {atom} from 'jotai'

interface Setting{
	width: number
	height: number
	adaption: string
} 

const settingAtom = atom<Setting>({
	width: 1920,
	height: 1080,
	adaption: "cropped"
})


export {settingAtom}
