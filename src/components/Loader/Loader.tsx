import { MoonLoader } from 'react-spinners';

const Loader = ({ ...props }) => {
   return (
      <div className='flex justify-center items-center h-screen'>
         <MoonLoader color="#36d7b7" {...props} />
      </div>
   )
}

export default Loader;