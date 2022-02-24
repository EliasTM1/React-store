
/*
* There a re 2 ways to create a functional component
? We can have it with a return or without it 
*/


const functionalComponent = () => (
    <div>You can directy render JSX using this notation</div>
)
const functionalCompReturn = () => {
    let testVar = "Frugal";
    return (
        <div>{testVar}</div>
    )
}


let packed = {
    func: functionalComponent,
    funcs: functionalCompReturn,
}

export default packed

