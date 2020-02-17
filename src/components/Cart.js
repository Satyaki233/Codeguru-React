import React,{useEffect,useState} from 'react'

const Cart = () => {
	
	const [cart,setCart] = useState([]);
	useEffect(()=>{
		const user = localStorage.getItem('info-id')
		fetch(`${process.env.REACT_APP_API_KEY}/Cart`,{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			   userid: user
			   })
		  }).then(res => res.json(res))
		  .then(data => {
			
		   
			setCart( cart =>data)
			
			})
		 
		  .catch(err =>console.log(err))
		 
	
	  
	},[])


	return (
		<div className='container-fluid'>
	      <table class="table">
  <thead className='bg-dark text-white'>
    <tr>
      
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Number</th>
	  <th scope="col">Drop</th>
    </tr>
  </thead>
  {
	  cart.map(items=>(
		<tbody>
		<tr>
		 
	  <td>{items.title}</td>
	  <td>${items.price}</td>
	  <td>@</td>
	  <td><button className='btn btn-danger'>Drop</button></td>
		</tr>
	   
	  </tbody>
	  ))
  }
 
</table>
		</div>
	)
}

export default Cart;


// {  
	     
// 	cart.map(items =>(
// 		<div>
	
// 	<td className='col-lg-4'>{items.title}</td>
// 	<td className='col-md-6'> {items.price}</td>
// 	</div>
// 	))
// }