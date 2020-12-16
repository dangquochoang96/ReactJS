import React from "react"
import HOC from "./hoc"
import Student from "./component/student"
import Teacher from "./component/teacher"


const dataStudent = [
    {id: 1, name: "MrD", phone: '099999999', age: 20, email: "test@gmail.com"},
    {id: 1, name: "MrQ", phone: '099999999', age: 18, email: "test@gmail.com"}
]
const dataTeacher = [
    {id: 1, name: "TeacherA", phone: '099999999', age: 30, email: "test@gmail.com"},
    {id: 1, name: "TeacherB", phone: '099999999', age: 35, email: "test@gmail.com"}
]
const NewStudent = HOC(Student, dataStudent)
const NewTeacher = HOC(Teacher, dataTeacher)

class HOCApp extends React.Component{
    render(){
        return(
            <>
                <NewStudent/>
                <NewTeacher/>
            </>
        )
    }
}
export default HOCApp