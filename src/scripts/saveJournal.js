import { dataManager } from "./dataManager"
import { formManager } from "./formManager"
import { domRender } from "./domRender"

const saveJournal = () => {
    document.querySelector("#saveBtn").addEventListener("click", () => {
        const title = document.querySelector("#title").value
        const content = document.querySelector("#content").value
        const date = document.querySelector("#date").value
        const mood = document.querySelector("#mood").value
        if (!title || !content || !date || !mood) {
            alert("please fill out the form!")
        } else {
            const entry = {
                title: title,
                content: content,
                date: date,
                mood: mood
            }
            dataManager.saveEntry(entry).then(() => {
                formManager.clearForm()
                domRender()
            })
        }
    })
}

export { saveJournal }