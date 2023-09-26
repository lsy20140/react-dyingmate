import { authInstance } from "../../utils/api"

// 버킷리스트 추가
const addBucketlist = async (content, pos) => {
  try {
    const {data} =  await authInstance.post('/api/bucketlist/add', {content: content, pos:pos})
    return data
  } 
  catch (error) {
    console.log(error)
  }
}

export {addBucketlist}