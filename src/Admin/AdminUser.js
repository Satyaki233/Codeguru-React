import React,{useEffect,useState} from 'react'


const AdminUser = (props) => {
    const [user,setUser] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/User`,{
            method:'GET',
            headers:{'Content-Type': 'application/json'}
        }).then(res => res.json(res))
        .then(data =>{
            // console.log(data)
             setUser( user=> data )
        })
     }, [])
    return (
        <div className='container'>
                
            <table class="table">
            <thead className='bg-dark text-white'>
                <tr>
                
                <th scope="col-3">id</th>
                <th scope="col-3">Username</th>
                <th scope="col-3">email</th>
                <th scope="col-3">joined</th>
                <th scope='col-3'>edit</th>
                </tr>
            </thead>
            {
                user.map(items=>(
                    <tbody>
                    <tr>
                    
                <td>{items.id}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.joined}</td>
                <td><button className='btn btn-danger'>edit</button></td>
                    </tr>
                
                </tbody>
                ))
            }
            
            </table>
                    </div>
    )
}



export default AdminUser
