// import { useEffect, useState } from 'react';
// import {Navigate} from 'react-router-dom'


// const Auth = (UnAuthComp) => {
//     const [isLogged, setIsLogged] = useState(true)
//     useEffect(()=>{
//         console.log('1')
//         let token;
//         try {
//         token = JSON.parse(localStorage.getItem('token'))
//         console.log('2')
//         if(!token)
//          setIsLogged(false)

//         } catch (error) {
//             console.log(error)
//             setIsLogged(false)
//         }
    
//     },[])
//     console.log('3')

//     if(!isLogged)
//         return <Navigate to="/login"/>
//     return function () {
//         return (
//              <div>
//              <input type='text' />
//             <UnAuthComp />
//              </div>
//              )}}
//              export default Auth
    
//     // const [isLogged, setIsLogged] = useState(true)
//     // useEffect(()=>{
//     //     console.log('1')
//     //     let token;
//     //     try {
//     //     token = JSON.parse(localStorage.getItem('token'))
//     //     console.log('2')
//     //     if(!token)
//     //      setIsLogged(false)

//     //     } catch (error) {
//     //         console.log(error)
//     //         setIsLogged(false)
//     //     }
    
//     // },[])
//     // console.log('3')

//     // if(!isLogged)
//     //     return <Navigate to="/login"/>

//     // return class extends Component{
//     //     constructor() {
//     //         super()
//     //         this.state = {
//     //             isLogged: true
//     //         }
//     //         this.showHide = this.showHide.bind(this)
//     //     }
//     //     showHide() {
//     //         this.setState({
//     //             showMsg: !this.state.showMsg
//     //         })
//     //     }
//     //     render(){
//     //         return (
//     //             <div>
//     //                 <input type='text' />
//     //                 <UnAuthComp />
//     //             </div>

//     //         );
//     //     }
//     // } 

// // export default Auth
