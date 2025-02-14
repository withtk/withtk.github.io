import { collection, query, where, getDocs } from 'firebase/firestore'

import cc from './constants'
import { db, getOne } from '@/fb/index'
// const Models = require("../models/user");

export const isExistingUser = async (chatID: string) => {
  const q = query(collection(db, cc.USER), where(cc.CHAT_ID, '==', chatID), where('isDeleted', '!=', true))
  const querySnapshot = await getDocs(q)
  const arr = []
  querySnapshot.forEach((doc) => {
    arr.push(doc.data())
  })
  return arr.length > 0
}

export const getUserFromChatID = async (chatID: string) => {
  return await getOne(cc.USER, cc.CHAT_ID, chatID)
}
