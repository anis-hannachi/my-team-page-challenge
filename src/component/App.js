import React from 'react'
import Header from './Header'
import Image from './Image'
import team from '../team.json'
import Images from './Images.js'

const App = () => {
      return (
        <div className='container'>
            <Header />
            <Images teamMembers={team.teams}/>
        </div>
    )
}



export default App;
