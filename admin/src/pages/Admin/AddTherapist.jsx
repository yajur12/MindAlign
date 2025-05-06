import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddTherapist = () => {


    const [therapistImg, setTherapistImg] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('Anxiety')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [link, setLink] = useState('')

    const {backendUrl, token} = useContext(AdminContext)


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if(!therapistImg) {
                return toast.error('Image Not Selected');
            }
            
            const formData = new FormData();

            formData.append('image',therapistImg)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('experience',experience)
            formData.append('fees',fees)
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('degree',degree)
            formData.append('address',JSON.stringify({line1:address1, line2:address2}))
            formData.append('meet',link)

        
            //console.log formdata

            formData.forEach((value, key) => {
                console.log(`${key} : ${value}`);
            });
            
            const {data} = await axios.post(backendUrl + '/api/admin/add-therapist', formData, {headers: {token}})
            
            if(data.success) {
                toast.success(data.message)
                setTherapistImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
                setLink('')

            } else{
                toast.error(data.message)
            }
        } catch (error){
            toast.error(error.response.data.message)
            console.log(error)
        }
    }

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Therapist</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex flex-items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer" src={therapistImg? URL.createObjectURL(therapistImg) : assets.upload_area} alt="" />
          </label>

          <input onChange={(e)=> setTherapistImg(e.target.files[0])} type="file" id="doc-img" hidden />

          <p>
            Upload Therapist <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">

            <div className="flex-1 flex flex-col gap-1">
              <p>Therapist name</p>
              <input onChange={(e)=> setName(e.target.value)} value={name} className="border rounded px-3 py-2" type="text" placeholder="Name" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Therapist Email</p>
              <input onChange={(e)=> setEmail(e.target.value)} value={email} className="border rounded px-3 py-2" type="email" placeholder="Email" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Therapist Password</p>
              <input onChange={(e)=> setPassword(e.target.value)} value={password} className="border rounded px-3 py-2" type="password" placeholder="Password" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select onChange={(e)=> setExperience(e.target.value)} value={experience} className="border rounded px-3 py-2" name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10 Years</option>
                <option value="11 Years">11 Years</option>
                <option value="12 Years">12 Years</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input onChange={(e)=> setFees(e.target.value)} value={fees} className="border rounded px-3 py-2" type="number" placeholder="fees" required />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className="border rounded px-3 py-2" name="" id="">
                <option value="Anxiety">Anxiety</option>
                <option value="Addiction">Addiction</option>
                <option value="Social Anxiety">Social Anxiety</option>
                <option value="Depression">Depression</option>
                <option value="Disorder">Disorder</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree} className="border rounded px-3 py-2" type="text" placeholder="Education" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className="border rounded px-3 py-2" type="text" placeholder="address 1" required />
              <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className="border rounded px-3 py-2" type="text" placeholder="address 2" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Google Meet Link</p>
              <input onChange={(e)=> setLink(e.target.value)} value={link} className="border rounded px-3 py-2" type="text" placeholder="link" required />
            </div>

          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Therapist</p>
          <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className="w-full px-4 pt-2 border rounded" placeholder="write about therapist" rows={5} required />
        </div>
        <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Add Therapist</button>
      </div>
    </form>
  );
};

export default AddTherapist;
