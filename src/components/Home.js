import React,{useState, Fragment,useEffect} from 'react'
import Layout from './Layout'
import { Redirect ,Link} from 'react-router-dom'
import '../App.css'


export default function Home() {
    
    
     const user = localStorage.getItem('info-name');
    
      const [pic,setPic] = useState([]);
      useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_KEY}/course`,{
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
         
         }).then(res => res.json(res))
         .then( data =>{
          
           setPic( pic =>data)
         })
      
        
      },[])
   
   
        return (
          <Fragment>
            <div>
                <Layout title='Home-Page' describtion='This is Home Page'>
                  
                  Welcome: {user}
                 
                </Layout>

                <div>
                  <input className='my-3' type='text' placeholder='Search' style={{ width:'200px', height:'50px' }} />
                <div >


            <ul className='container-fluid' >
            <div className='whole-body' style={{ overflow : 'scroll' , border:' 5px solid black' ,width : '90vw', height:'100vh' }} >
              {pic.map(pics =>(
                <Fragment className='row d-flex flex-column my-2'>

                  <div  className='col-sm-4 mb-3'>
                  <div class="Shadow">
                     <div className='card mb-3'>
                     <div className='card-header bg-warning'>
                             {pics.title}
                          </div>
                     <img className="card-img-top" src={`${process.env.REACT_APP_API_KEY}/${pics.image}`} alt="Card image"/>
                         
                          <div className='card-body'>
                              < p>{pics.price} </p>
                              <p>{pics.intro}</p>
                              <Link className='btn btn-info'  to={`/course/${pics.id}`}>
                                 See course
                              </Link>
                          </div>
                     </div>
                     </div>
                  </div>
                </Fragment>
              ))}
              </div>
            </ul>
                </div>
                
            </div>
            </div>
          
        </Fragment>
        );
    
}
