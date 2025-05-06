import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useState } from 'react';
const Therapists = () => {
  const {speciality}=useParams();
  const {therapists}=useContext(AppContext);
  const[filterDoc,setFilterDoc]=useState([]);
  const [showFilter, setShowFilter] = useState(false)

  const navigate=useNavigate();
  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(therapists.filter((item)=>item.speciality===speciality));
    }
    else{
      setFilterDoc(therapists);
    }
  }
  
  useEffect(()=>{
    applyFilter();
  },[therapists,speciality])


  return (
    <div>
        <p className='text-gray-600'>Browse through the Therapists Specialist.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=> setShowFilter(prev => !prev )}>Filters</button>
          <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={()=>speciality==='Anxiety'?navigate('/therapists') : navigate('/therapists/Anxiety')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Anxiety"?"bg-indigo-100 text-black ": ""}`}>Anxiety</p>




            <p onClick={()=>speciality==='Addiction'?navigate('/therapists') : navigate('/therapists/Addiction')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Addiction"?"bg-indigo-100 text-black ": ""}`}>Addiction</p>


            <p onClick={()=>speciality==='Social Anxiety'?navigate('/therapists') : navigate('/therapists/Social Anxiety')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Social Anxiety"?"bg-indigo-100 text-black ": ""}`}>Social Anxiety</p>


            <p onClick={()=>speciality==='Depression'?navigate('/therapists') : navigate('/therapists/Depression')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Depression"?"bg-indigo-100 text-black ": ""}`}>Depression</p>


            <p onClick={()=>speciality==='Disorder'?navigate('/therapists') : navigate('/therapists/Disorder')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Disorder"?"bg-indigo-100 text-black ": ""}`}>Disorder</p>


            {/* <p onClick={()=>speciality==='Disorders'?navigate('/therapists') : navigate('/therapists/Disorders')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Disorders"?"bg-indigo-100 text-black ": ""}`}>Disorders</p> */}


            
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
              {
                filterDoc.map((item,index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-blue-50 ' src={item.image} alt={item.name} />
                        <div className='p-4'>
                        <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' :'text-gray-500' }  `}>
                                <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} bg-green-500 rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>
                                {item.name}
                            </p>
                            <p className='text-gray-600 text-sm '>{item.speciality}</p>
                        </div>
                    </div>
                ))
              }
          </div>
        </div>
    </div>
  )
}

export default Therapists