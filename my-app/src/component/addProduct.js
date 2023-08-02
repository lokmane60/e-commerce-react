import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddProduct = () => {
    const [title,setTitle]= useState('')
    const [description,setDescreption]= useState('')
    const [file,setFile]= useState()
    const [colors,setColors]= useState([])
    const [dimention,setDimention]= useState([])
    const [isBlack,setBlack]= useState(false)
    const [isRed,setRed]= useState(false)
    const [isBlue,setBlue]= useState(false)
    
    const handleClick= (click)=>{
        
        let ExisteColor = false;
        
        colors.filter(color=>{
            if(color==click){
                ExisteColor=true
                
            }
            else{
                return color;
            }
        })
        if(!ExisteColor){
            setColors(colo=>[...colo,click])
        }
        
        
        /*if(click=="black"){
            setBlack(isBlack ? false: true)
        }
        if(click=="red"){
            setRed(isRed ? false: true)
        }
        if(click=="blue"){
            setBlue(isBlue ? false: true)
        }
        
        //console.log(isBlack)*/
    }
    const handleClickDim= (click)=>{
        
       
        let ExisteDim = false;
       
        
        dimention.filter(color=>{
            if(color==click){
                ExisteDim=true
                
            }
            else{
                return color;
            }
        })
        if(!ExisteDim){
            setDimention(colo=>[...colo,click])
        }

    }
    
    const handleAdd = (e)=>{
        e.preventDefault()
        
        //console.log(isBlack,isBlue,isRed)
        /*if(isBlack) {colorsTable.push('black')}
        if(isRed) {colorsTable.push('red')}
        if(isBlue) { colorsTable.push('blue')}*/

        //console.log(colorsTable)
        const formDat = new FormData();
        //formDat.append('file',file);
        formDat.append("title",title);
        //const s = {"black": isBlack,"blue":isBlue,"red":isRed}
        //colors.forEach(color => 
        //formDat.append('colors', 'gry');
        //formDat.append('colors', 'red');
        dimention.forEach(f=> formDat.append('dimention',f))
        colors.forEach(fi=> formDat.append('colors',fi))
        file.forEach(fil=> formDat.append('files',fil))
        
        //formDat.append("colors",{u:'pp'});
        //console.log(...formDat)
        formDat.append("description",description);
        const config = {
            method:'POST',
            //headers:{'Content-Type':'application/json'},
            body: formDat
        }
        fetch('http://127.0.0.1:5000/product/addProduct',config)
        .then(res=>console.log(res.data))
    }
  
    return (
    <>
    <div className='container'>
        <form  onSubmit={handleAdd}>
            <div className='form-group'>
                <input className='form-control' type='text' placeholder='Title' 
                onChange={(e)=>setTitle(e.target.value)} />
            </div>
            
            <div className='form-group'>
            <input className='form-control' type='text' placeholder='Description'
            onChange={(e)=>setDescreption(e.target.value)} />
            </div>
            <div className='form-group'>
                <input className='form-check-input' type='checkbox'  value='2'
                onChange={(e)=>handleClickDim(e.target.value)} />
                <label class="form-check-label" >2</label>
            </div>
            <div className='form-group'>
                <input className='form-check-input' type='checkbox'  value='4'
                onChange={(e)=>handleClickDim(e.target.value)} />
                <label class="form-check-label" >4</label>
            </div>
            
            
            <div className='form-group'>
                <input className='form-check-input' type='checkbox'  value='red'
                onChange={(e)=>handleClick(e.target.value)} />
                <label class="form-check-label" >rouge</label>
            </div>
            <div className='form-group'>
                <input className='form-check-input' type='checkbox'  value='black'
                onChange={(e)=>handleClick(e.target.value)} />
                <label class="form-check-label" >black</label>
            </div>
            <div className='form-group'>
                <input className='form-check-input' type='checkbox'  value='blue'
                onChange={(e)=>handleClick(e.target.value)} />
                <label class="form-check-label" >blue</label>
            </div>
            
            <div class="mb-3">
                <label for="formFileMultiple" className='form-label'>Multiple files input example</label>
                <input className='form-control' type="file" id="formFileMultiple" multiple onChange={(e)=>{
                setFile(Array.from( e.target.files))
            }}/>
            </div>
            
            <div><input type='file' multiple onChange={(e)=>{
                setFile(Array.from( e.target.files))
            }}/></div>
            <button className='btn btn-primary'>add Product</button>
            
        </form>
    </div>
    </>
  )
}

export default AddProduct