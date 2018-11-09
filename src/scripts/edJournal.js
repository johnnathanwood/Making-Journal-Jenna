import { dataManager } from "./dataManager"
import { domRender } from "./domRender"

const edJournal = () => {
    document.querySelector("#output").addEventListener("click", evt => {
        if (evt.target.id.startsWith("delete")) {
            const id = evt.target.id.split("!")[1]
            dataManager.deleteEntries(id).then(() =>
                domRender()
            )
        }
    })
}

export { edJournal }