import { useState } from "react";

const localCache = {};

export default function usePapersList() {
    const [papersList, setPapersList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    async function requestPapersList(
        subject,
        location,
        apiKey = localStorage.getItem("@apiKey")
    ) {
        if(!apiKey)
            alert("Please, set up your API key before making a request!");
        if (!location || !subject) {
            setPapersList([]);
        } else if (localCache[location + subject]) {
            setPapersList(localCache[location + subject]);
        } else {
            setStatus("loading");
            const requestUrl = `https://api.elsevier.com/content/search/scopus?apiKey=${apiKey}&subj=${subject}&query=AFFILORG(${location})`;
            const papersResponse = await fetch(requestUrl);
            const papersReponseJson = await papersResponse.json();
            localCache[location + subject] = papersReponseJson;
            setPapersList(localCache[location + subject]);
            setStatus("done");
        }
    }

    return [papersList, requestPapersList, status];
}
