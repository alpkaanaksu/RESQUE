import { writable } from 'svelte/store';
import { save, getSavedData } from './utils/storage';
import { browser } from '$app/environment';

export const input = writable(getSavedData());

input.subscribe(value => {
    if (browser) {
        if (value.length === 0) {
            input.set([{type: 'meta'}]);
            return;
        }

        console.log('Saving data', value);
        save(value);
    }
});

export const currentIndex = writable(0);
export const config = writable({});
