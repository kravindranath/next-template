import { configureStore } from '@reduxjs/toolkit'
import homePage from 'src/store/reducers/homepage'

export default configureStore({
  reducer: {
    homePage
  }
})