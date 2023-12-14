import { useNavigate } from 'react-router-dom'
import ErrorImg from '../assets/img/error404.png'
import LargeButton from '../components/atom/general/LargeButton'

function Error404() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center gap-8 w-1/2 m-auto h-screen'>
        <img src={ErrorImg} />
        <div className='text-center'>
             <h3 className='text-[42px] font-bold'>Oops! the page not found.</h3>
        <p className='text-[#637381]'>Or simply leverage the expertise of our consultation team.</p>
        </div>
       
        <LargeButton btnName={"Go Home"} btnStyle="rounded-lg bg-[#624BFF] text-white px-5 py-3" onClick={(e)=>navigate("/")}/>
    </div>
  )
}

export default Error404