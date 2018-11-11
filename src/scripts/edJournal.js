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
        if (evt.target.id.startsWith("edit")) {
            const id = evt.target.id.split("!")[1]
            dataManager.singleEntry(id).then((entry) => {
                document.querySelector("#title").value = entry.title
                document.querySelector("#content").value = entry.content
                document.querySelector("#date").value = entry.date
                document.querySelector("#mood").value = entry.mood
            })
        }
    })
}

export { edJournal }