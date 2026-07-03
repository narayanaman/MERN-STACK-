function Greeting(props){
    console.log(props);
    const {name,course,mobile}=props;
    return(
        <div>
            <h1>Good Morning {name}</h1>
            <h1>Your Course is {course}</h1>
            <h4>Contact is {mobile}</h4>
        </div>
    );
}
// function Greeting({name,course,mobile}){
//     return(
//         <div>
//             <h1>Good Morning {name}</h1>
//             <h1>Your Course is {course}</h1>
//             <h4>Contact is {mobile}</h4>
//         </div>
//     );
// }
// function Greeting(props){
//     return(
//         <div>
//             <h1>Good Morning {props.name}</h1>
//             <h1>Your Course is {props.course}</h1>
//             <h4>Contact is {props.mobile}</h4>
//         </div>
//     );
// }

export default Greeting;