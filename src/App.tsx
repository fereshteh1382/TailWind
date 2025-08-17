import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useForm, type SubmitHandler } from 'react-hook-form'

type FormData = {

  email: string;
  password: string;

}
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  }
  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className='rounded-lg bg-white w-full md:w-1/2 m-0 md:flex p-4'>
          <div className='w-full md:w-1/2'>
            <div className='flex' ><img src='vite.svg' />Logo Image</div>
            <div className='p-8'>
              <div><h3 className='font-bold'>Welcome Back,John</h3><span>****</span></div>
              <div className='my-4 border-b-1 border-t-1 border-gray-200 p-2 text-sm flex '>
                <img src='vite.svg' /><a href="#" className="text-indigo-600 hover:underline">Log in With Google </a>
              </div>
              <div className="justify-center bg-white p-8">
                <div className="w-full max-w-md">
                  <h4 className=" font-bold text-gray-800 mb-6">Or Log In</h4>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    <div>

                      <input {...register("email", {
                        required: "Emai Required !",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid Email Format !"
                        }
                      })}
                        type="email"
                        placeholder="Enter Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </div>

                    <div>

                      <input {...register("password", { required: "Password Required !" })}
                        type="password"
                        placeholder="******"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-300 py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                      Login
                    </button>
                  </form>

                  <div className="text-sm text-gray-600 mt-4 flex gap-24">
                    <a href="#" className="text-indigo-600 hover:underline">
                      Remember Me
                    </a>
                    <a href="#" className="text-indigo-600 hover:underline">
                      Forgot Password
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/2 mt-4 md:mt-0 md:py-20'>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              className="rounded-xl"
            >
              <SwiperSlide>
                <img src="1.jpg" alt="slide1" className="w-full h-full object-cover rounded-xl" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="2.jpg" alt="slide2" className="w-full h-full object-cover rounded-xl" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="3.jpg" alt="slide3" className="w-full h-full object-cover rounded-xl" />
              </SwiperSlide>
            </Swiper>
          </div>


        </div>

      </div>





    </>
  )
}

export default App
