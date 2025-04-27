import axios from 'axios'
import { get } from '../../../server/routes/authRoute';

const url = 'https://course-match-api.vercel.app/api'

const getCourses = async (aps, university, courseName) => {
  try {
    const response = await axios.post(`${url}/courses`, {
      aps,
      university,
      courseName
    });
    const courses = await response.json()

    console.log(courses);
  } catch (error) {

  }

}

export default {
  getCourses
}