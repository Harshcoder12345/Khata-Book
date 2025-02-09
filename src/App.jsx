import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Form from './component/Form'
import Dashboard from './component/Dashboard'
import Listgroup from './component/Listgroup'
import { TransactionProvider } from './context/TransactionContext'


const App = () => {




  return (

<TransactionProvider>
<Navbar/>
<div className="container-form  form-color pt-5 ">
<div className="container  ">
<Form  />
<Dashboard />
<Listgroup />
</div>
</div>
</TransactionProvider>

  )
}

export default App