import Link from "next/link";
import Logo from "../components/Logo";

export default function Page() {
  const maxWidth = 'max-w-4xl mx-auto';

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <div className="p-6">
        <Logo classes='h-[96px] w-[96px]' />
      </div>
      <div className="flex flex-col items-center gap-y-12 mb-6 ">
        <section className={`${maxWidth} flex flex-col items-center gap-y-10 max-w-lg mx-auto`}>
          <h1 className='text-5xl font-semibold text-center'>Create VSCode themes, fuss-free</h1>
          <div className="flex flex-col items-center gap-y-3">
            <Link href='/sandbox'>
              <button className='w-fit rounded-full bg-white text-black transition duration-75 transform hover:scale-[102%] active:scale-100 text-md px-6 py-2'>
                Start designing
              </button>
            </Link>
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
    </div>
  )
}
