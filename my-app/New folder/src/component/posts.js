import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost,deletePost } from '../redux/reducers/postsSlice';

const Posts = () => {
    const [title,setTitle] = useState("");
    const[desc,setDesc]=useState("");
    const posts = useSelector((state)=>state.posts.items)
     
    const disdpatch = useDispatch();
    
  return (
    <><div><input type='text' value={title} placeholder='Title'
    onChange={(e=>setTitle(e.target.value))}/>
    
    <input type='text' value={desc} placeholder='desc'
    onChange={(e=>setDesc(e.target.value))}/>
    
    <button onClick={()=>{
        disdpatch(addPost({id:posts.length+1,title,desc}))
        setTitle("")
        setDesc("")
    }}>add post</button></div>
    
        {posts.length > 0 ? posts.map(post =><div key={post.key}>
        <h>{post.title}</h>
        <p>{post.desc}</p>
        <button>edit</button>
        <button onClick={()=>{
        disdpatch(deletePost({id:post.id}))}}
        >delete</button></div>) : 'there no posts'}
        
    
    
    </>
  )
}

export default Posts