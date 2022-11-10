import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link";

export default function Page() {
  const maxWidth = 'max-w-4xl mx-auto';

  return (
    <div className="bg-[#090a36] min-h-screen">
      <Navbar maxWidth={maxWidth} />
      <div className="flex flex-col items-center gap-y-12 mb-6 ">
        <section className={`${maxWidth} flex flex-col items-center gap-y-10 max-w-lg mx-auto`}>
          <h1 className='text-5xl font-bold text-center'>Create VSCode themes, fuss-free</h1>
          <div className="flex flex-col items-center gap-y-3">
            <Link href='/sandbox'>
              <button className='w-fit rounded-full bg-white text-black transition duration-75 transform hover:scale-[102%] active:scale-100 text-md px-6 py-2 font-medium'>
                Start designing
              </button>
            </Link>
            <p className="text-gray-500 text-sm">or <a href="#" className="ml-0.5 underline-offset-4 hover:underline text-white">Sign In</a></p>
          </div>
        </section>
        <section>
          <div className="border-b-[10px] border-purple-900 rounded-[2.5rem]">
            <div className="w-[50rem] border-[10px] border-purple-800 bg-purple-900 h-40 rounded-[1.5rem] shadow-inner">
              Code
            </div>
          </div>
        </section>
      </div>
      <Footer maxWidth={maxWidth} />
    </div>
  )
}
