import idb from 'idb';
import { detect } from 'detect-browser';

const browser = detect();
const dbPromise = idb.open('FormsBuilderDB', 1, upgradeDB => upgradeDB.createObjectStore('forms'));

export const myDB = {
  getAll() {
    return dbPromise.then(db => {
      return db.transaction('forms')
      .objectStore('forms').getAll();
    });
  },
  addForm(form) {
    return dbPromise.then(db => {
      const tx = db.transaction('forms', 'readwrite');
      if (browser.name === 'chrome') {
        tx.objectStore('forms').put({...form});
      } else if (browser.name === 'firefox') {
        tx.objectStore('forms').put({...form}, form.id);
      } else {
        tx.objectStore('forms').put({...form}, form.id);        
      }
      return tx.complete;
    }).catch(err => console.log(err));
  },
  addSubInput(form) {
    return dbPromise.then(db => {
      const tx = db.transaction('forms', 'readwrite');
      if (browser.name === 'chrome') {
        tx.objectStore('forms').put({...form});
      } else if (browser.name === 'firefox') {
        tx.objectStore('forms').put({...form}, form.id);
      } else {
        tx.objectStore('forms').put({...form}, form.id);        
      }
      return tx.complete;
    });
  },
  update(key, updates) {
    return dbPromise.then(db => {
      const tx = db.transaction('forms', 'readwrite');
      tx.objectStore('forms').iterateCursor(cursor => {
        if (!cursor) return;
        if (cursor.key === key) {
          const updatedValue = {...cursor.value, ...updates};
          cursor.update(updatedValue);
        }
        cursor.continue();
      });
 
      return tx.complete;
    });
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction('forms', 'readwrite');
      tx.objectStore('forms').delete(key);
      return tx.complete;
    });
  },
}
