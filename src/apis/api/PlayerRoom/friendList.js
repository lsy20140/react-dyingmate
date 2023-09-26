import axios from 'axios'
import { defaultInstance } from '../../utils/api'

export const getAllFriends = async () => {
  try {
    const {data} = await defaultInstance.get('http://localhost:3000/data/PlayerRoom/friendData.json')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

export const getAllRequests = async () => {
  try {
    const {data} = await defaultInstance.get('http://localhost:3000/data/PlayerRoom/requestData.json')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}