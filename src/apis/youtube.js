import axios from 'axios';  
const KEY = 'AIzaSyCmTJk2YXztVXyxMnWclSK_UTfmpQeRi9Q'  ;
export const baseParams = { 
part: "snippet",
maxResults: 5,
type: "video",
key: `${KEY}` } 

export default axios.create({     
baseURL: 'https://www.googleapis.com/youtube/v3',
 })