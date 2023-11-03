import { writable } from 'svelte/store';

export var cart  = writable(0);

export var order = writable([]);