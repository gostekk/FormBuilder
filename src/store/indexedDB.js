import idb from 'idb';

const dbPromise = idb.open('FormsBuilderDB', 1, upgradeDB => {
  upgradeDB.createObjectStore('forms');
});

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
      tx.objectStore('forms').add({...form});
      return tx.complete;
    });
  },
  addSubInput(form) {
    return dbPromise.then(db => {
      const tx = db.transaction('forms', 'readwrite');
      tx.objectStore('forms').add({...form});
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