
import { createStore, atom } from "jotai"
const store = createStore()

const socialCreditAtom = atom(0)

store.set(socialCreditAtom, 5000)

const unsub = store.sub(
	socialCreditAtom,
	()=>{
		console.log('Social credit value is changed to', store.get(socialCreditAtom))
	}
)


export default store
