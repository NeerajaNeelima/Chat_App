
import * as React from 'react'

import { Button, ButtonGroup } from '@chakra-ui/react'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Homepage'
import Chat from './Pages/Chatpage'
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (

    <>
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat' element={<Chat/>}/>
    </Routes>
    </div>
    
    
    </>
    

    
   
  )
}
export default App;
