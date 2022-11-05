import Header from "../components/header"
import Footer from "../components/Footer"

export default function Page() {
  return (
    <>
      <Header />
      <div className='my-6'>
        <h1 className='text-5xl'>Create your own themes for VSCode</h1>
        <button className='font-medium text-black bg-white border-b-2 border-gray-400 rounded-lg text-md px-6 py-3'>Start designing</button>
      </div>
      <Footer />
    </>
  )
}
