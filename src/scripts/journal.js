import { formManager } from "./formManager"
import { domRender } from "./domRender"
import { saveJournal } from "./saveJournal"
import { edJournal } from "./edJournal"



const journal = () => {
    document.querySelector("#input").innerHTML = formManager.htmlForm()
    domRender()
    saveJournal()
    edJournal()
    

}

export { journal }


