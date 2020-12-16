import React from 'react'
import './common.css'

const ContentText = (props) => {
    console.log(props)
    return (
        <>
            <section className={`content ${props.theme}`}>
                <p className={`content-text ${props.color}`}>
                    Veniam non veniam dolore voluptate. Laboris id et officia occaecat ad quis excepteur incididunt eu. Nisi id officia quis nisi in est dolore dolore. Ad elit aliqua adipisicing enim proident. Nisi adipisicing ad adipisicing dolore ut mollit cillum. Eiusmod occaecat excepteur laborum dolore velit adipisicing officia sunt voluptate labore.
                </p>
            </section>
        </>
    )
}



export default ContentText