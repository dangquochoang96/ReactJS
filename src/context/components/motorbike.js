import React from 'react'
import MyContext from '../global/my-context'
//MyContext: giúp lấy data từ Provider

class Motorbike extends React.Component {
    render() {
        return (
            <>
                <MyContext.Consumer>
                    {context => (
                        <table width="100%" cellSpacing="0" cellPadding="0" border="1">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Color</th>
                                    <th>Money</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </MyContext.Consumer>
            </>
        )
    }
}
export default Motorbike