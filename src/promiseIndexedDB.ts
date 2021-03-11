/*
 * IndexedDBがイベント主体の非同期処理であり、扱いにくいため、Promiseでラップする 
 * 
 * */  

/**
 * 
 * 
 */

export const initializeIndexedDB = async (
  dbName: string,
  version?: number
) => {

};


/**
 * IndexedDBを開く関数
 */
export const openIndexedDB = async (
  dbName: string, 
  version?: number
  ): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const openReq = indexedDB.open(dbName, version); 
      openReq.onerror = () => {
        reject(new Error("IndexedDB open error"));
      }
      openReq.onsuccess = () => {
        resolve(openReq.result);
      };

      openReq.onupgradeneeded = () => {

      }
    });
};


/**
 *  オブジェクトストアに格納するオブジェクトの型を指定できる 
 */
export const createObjectStore = async <T extends any>(
  db: IDBDatabase, 
  objStoreName: string,
  options?: IDBObjectStoreParameters
  ): Promise<IDBObjectStore> => {
    return new Promise((resolve, reject) => {
      const objStore = db.createObjectStore(objStoreName, options); 
      resolve(objStore);
    });
};


openIndexedDB("todo", 1).then((db) => {
})
