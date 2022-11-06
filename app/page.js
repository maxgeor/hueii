import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link";

export default function Page() {
  const maxWidth = 'max-w-4xl mx-auto';

  return (
    <>
      <Navbar maxWidth={maxWidth} />
      <div className="flex flex-col items-center gap-y-12 my-6">
        <section className={`${maxWidth} flex flex-col items-center gap-y-12`}>
          <h1 className='text-5xl font-bold text-center'>Create & publish VSCode themes, without the fuss</h1>
          <div className="flex flex-col items-center gap-y-4">
            <Link href='/editor'>
              <button className='w-fit rounded-full bg-white text-black transition ease-out transform hover:scale-110 active:scale-100 -rotate-1 hover:-rotate-2 active:-rotate-1  text-lg px-6 py-3 font-bold'>
                Start designing
              </button>
            </Link>
            <p className="text-gray-500">or <a href="#" className="ml-1 underline underline-offset-4 text-decoration-color-gray-500 font-medium text-white">Sign In</a></p>
          </div>
        </section>
        <section>
          <div className="border-b-[10px] border-gray-900 rounded-[2.5rem]">
            <div className="w-[50rem] border-[10px] border-gray-800 bg-gray-900 h-40 rounded-[1.5rem] shadow-inner">
              lknvls
            </div>
          </div>
        </section>
      </div>
      <Footer maxWidth={maxWidth} />
    </>
  )
}
