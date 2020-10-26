import React from 'react'
import Header from './Header'

const isAuth = true

export default () => {
    return (
        <div>
            <Header/>
            { isAuth == true ? <div>Here are your products</div> : <div>Please log in</div>}
        </div>
    )
}