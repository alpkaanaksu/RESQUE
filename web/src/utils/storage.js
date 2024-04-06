import { input } from '../stores';
import { get, } from 'svelte/store';
import { getVersion } from './helpers';
import { browser } from '$app/environment';


export const save = formData => {
    if (!browser) return;

    localStorage.setItem("formdata", JSON.stringify(formData));
}

export const getSavedData = () => {
    if (!browser) return [{type: 'meta'}];

    return JSON.parse(localStorage.getItem("formdata") ?? '[]');
}

export const clear = () => {
    if (!browser) return;

    input.set([{type: 'meta'}]);
    localStorage.clear();
    sessionStorage.clear();
}

export const saveToFile = async () => {
    const results = get(input);

    const millis = Date.now();

    results[0].date_exported = millis;

    let json = JSON.stringify(results, null, 2);
    let blob = new Blob([json], { type: "text/json;charset=utf-8" });
    let filename = `resque_${results[0].LastName ? results[0].LastName.toLowerCase() + "_" : ""}${millis}.json`;

    const a = document.createElement('a');
    a.innerText = filename;
    a.download = filename;
    a.href = (window.URL || window.webkitURL).createObjectURL(blob);

    a.click();
}


export const handleLoad = fileContent => {
    if (fileContent.every(r => getVersion(r.type) === r.version)) {
        sessionStorage.clear();
        input.set(fileContent);
    } else {
        alert("Warning: the data in the local file was created using an earlier version. Trying to load it anyway.");

        // Temporary: Load anyway!!
        sessionStorage.clear();
        input.set(fileContent);
    }
}
