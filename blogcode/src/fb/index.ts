import { initializeApp } from 'firebase/app'
import {
  doc,
  getFirestore,
  setDoc,
  Timestamp,
  serverTimestamp,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  runTransaction,
  writeBatch,
  getDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// console.log('VITE_PROJECT_ID : ',import.meta.env.VITE_PROJECT_ID) // https://vite-api-url

const { VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_PROJECT_ID, VITE_STORAGE_BUCKET, VITE_MESSAGING_SENDER_ID, VITE_APP_ID } = import.meta.env

const app = initializeApp({
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  // databaseURL: DATABASE_URL,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
})

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
export const st = getStorage(app)

export const getStRef = (name: string) => ref(st, name)
export const uploadSt = (file: File, name: string, callback: (url: string) => void) => {
  const stRef = ref(st, name)
  uploadBytes(stRef, file).then(async (snapshot) => {
    console.log('--func--snapshot: ', snapshot)
    const url: string | undefined = await getStUrl(name)
    if (url) callback(url)
  })
}
export const getStUrl = async (fileName:string) => {
  try {
    const newURL = fileName
    const url = await getDownloadURL(ref(st, newURL))

    const response = await fetch(url)
    const blob = await response.blob()
    const imageURL = URL.createObjectURL(blob)
    return imageURL
  } catch (error) {
    console.error('Error loading image:', error)
  }
}

export const setData = async (coll: string, docId: string, obj: any) => {
  console.log('--setData--obj: ', obj)
  obj.createTime = Timestamp.fromDate(new Date()) // add time
  await setDoc(doc(db, coll, docId), obj, { merge: true })
    .then(() => {
      console.log('----success----')
    })
    .catch((error) => {
      console.error('----error----')
    })
}

/**
 * ID생성_set
 * @param req
 * @param res
 * @param coll
 * @param obj
 * @returns {Promise<void>}
 */
export const addIdData = async (coll: string, obj: any) => {
  console.log('--addIdData--coll: ', coll, obj)
  obj.createTime = Timestamp.fromDate(new Date()) // add time
  await addDoc(collection(db, coll), obj)
    .then(() => {
      console.log('----success----')
    })
    .catch((error) => {
      console.error('----error----')
    })
}

export const updateData = async (coll: string, docId: string, obj: any) => {
  obj.updateTime = Timestamp.fromDate(new Date())
  console.log('--updateData--obj: ', coll, docId, obj)

  await updateDoc(doc(db, coll, docId), obj)
    .then(() => {
      console.log('----success----')
    })
    .catch((error) => {
      console.error('----error----')
    })
}

export const delData = async (coll: string, docId: string, obj: any) => {
  obj.deleteTime = Timestamp.fromDate(new Date())
  obj.isDeleted = true
  await updateDoc(doc(db, coll, docId), obj)
    .then(() => {
      console.log('----success----')
    })
    .catch((error) => {
      console.error('----error----')
    })
}

export const getData = async (coll: string, docId: string, obj: any) => {
  await getDoc(doc(db, coll, docId))
    .then((e) => {
      console.log('----success----')
    })
    .catch((error) => {
      console.error('----error----')
    })
}

export const getOne = async (coll: string, column: string, value: string) => {
  const q = query(collection(db, coll), where(column, '==', value), where('isDeleted', '!=', true))
  const querySnapshot: any = await getDocs(q)
  // querySnapshot.forEach((doc: any) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, ' => ', doc.data())
  // })
  return querySnapshot.docs[0].data()
}

export const getList = async (coll: string, _limit: number) => {
  const q = query(collection(db, coll), orderBy('createTime', 'desc'), limit(_limit))
  const querySnapshot = await getDocs(q)

  const arr: Array<any> = []
  querySnapshot.forEach((doc: any) => {
    arr.push(doc.data())
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, ' => ', doc.data());
    //   if(res) res.json({ ok: true, data: doc.data() });
  })
  return arr
}
