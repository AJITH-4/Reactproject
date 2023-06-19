import React ,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import {API_URL} from "../index"
import {Form, useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';
import CheckBox from '../common/CheckBox';

function ManageBlog() {
  let [blog,setBlog] =useState([])

  let getData = async()=>{
    // let res =await fetch (`${API_URL}`)
    // let data = await res.json()
    // setBlog(data)
  try{
    let res = await axios.get(`${API_URL}`)
    if(res.status===200){
      setBlog(res.data)
      // toast.success("Blogs fetched Successfully!")
    }
  }catch(error){
    alert (error)
  }
  
  }
  
  let handleDelete = async(id)=>{
    try {
      let res = await axios.delete(`${API_URL}/${id}`)
      if(res.status===200)
      {
        getData()
      }
    } catch (error) {
      alert(error)
    }
  }

  let handleStatusChange = async (id,status)=>{
    try {
      let res = await axios.put(`${API_URL}/${id}`,{
        active_flag:status
      })
      if(res.status===200)
      {
        getData()
      }
    } catch (error) {
      alert(error)
    }
  }
  
  useEffect(()=>{
    getData()
  },[])
  return <>
  <div className='manage'>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width:"5%",background:"#8ec3eb"}}>#</th>
          <th style={{width:"10%",background:"#8ec3eb"}}>Title</th>
          <th style={{width:"40%",background:"#8ec3eb"}}>Description</th>
          <th style={{width:"10%",background:"#8ec3eb"}}>Image</th>
          <th style={{width:"10%",background:"#8ec3eb"}}>Status</th>
          <th style={{width:"20%",background:"#8ec3eb"}}>Action</th>
        </tr>
      </thead>
      <tbody>
          {
            blog.map((e,i)=>{
              return <tr key={i} style={{verticalAlign:"middle"}}>
                <td>{i+1}</td>
                <td>{e.title}</td>
                <td><Description content={e.description}/></td>
                <td><Image imageUrl={e.imageUrl}/></td>
                <td><CheckBox id={e.id} status={e.active_flag} onStatusChange={handleStatusChange}/></td>
                <td><Action id ={e.id} onDelete={handleDelete}/></td>   
            
                </tr>
            })
              
            
          }

      </tbody>
    </Table>
  </div>
  </>
}

export default ManageBlog

function Image({imageUrl}){
return<>
<div style={{textAlign:'center',width:"100px"}}>
<img src={imageUrl} alt={"BlogImage"} style={{width:"50px", height:"50px"}}/>
</div>
</>
}

function Description ({content}){
  return <>
  <div className='description-wrapper'>
    <div className='"description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto necessitatibus dolore possimus harum tempora ipsum a!</div>
    </div>
  </>
}


function Action({id,onDelete}){
 let navigate =useNavigate()
 return<>
  <div className='action'>
  <div className='edit'> <i className="fa-solid fa-file-pen" style={{cursor:"pointer"}}
   onClick={()=>navigate(`/edit/${id}`)}
   ></i></div>
    &nbsp;
    &nbsp;  
    <div className='delete'>
    <i className="fa-solid fa-trash" style={{cursor:"pointer"}}
    onClick={()=>onDelete(id)}
    ></i>
    </div>
  </div>
  </>
}

// function CheckBox({id,status,onStatusChange}){
//   return<>
//   <label class="switch">
//   <input type="checkbox" checked={status} onChange={()=>onStatusChange(id,!status)}/>
//   <span class="slider round"></span>
// </label>
//   </>
// }