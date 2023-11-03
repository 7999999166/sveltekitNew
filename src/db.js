import Dexie from 'dexie';

   const db = new Dexie('myDatabase');

   db.version(1).stores({ products: '++id, name, amount , quantity' });

   export {db};