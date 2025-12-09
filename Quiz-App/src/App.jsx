import './App.css'

function App() {

  return (
    <div class='bg-gray-100 w-4xl h-[90vh] flex m-auto mt-4 rounded-2xl flex-col overflow-hidden'>
      <div class='flex h-16 bg-blue-400'>
        <div class='mt-5 ml-5 text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </div>
        <h1 class='ml-[40%] flex mt-3 text-white font-bold text-4xl'>Quiz</h1>
      </div>
      <div>
        <div class='bg-gray-50 w-11/12 mx-auto mt-5 rounded-lg px-6 py-5 shadow-md'>
          <h2 class='font-bold text-lg'>Question 1</h2>
          <p class='mt-3 text-base font-semibold'>What is the Capital of France?</p>
        </div>
        <div class='w-[90%] m-auto mt-5 rounded-[6px] py-5 flex flex-col'>
          <div class='w-full p-3 bg-amber-50 my-2 rounded-lg border border-gray-300 hover:bg-amber-100 hover:shadow-md transition-colors duration-300 ease-in-out cursor-pointer flex items-center'>
            <input class=' cursor-pointer w-4 h-4' type="radio" value='london' name='option' />
            <label class='ml-3 text-[20px]'>London</label>
          </div>
          <div class='w-full p-3 bg-amber-50 my-2 rounded-lg border border-gray-300 hover:bg-amber-100 hover:shadow-md transition-colors duration-300 ease-in-out cursor-pointer flex items-center'>
            <input class=' cursor-pointer w-4 h-4' type="radio" value='rome' name='option' />
            <label class='ml-3 text-[20px]'>Rome</label>
          </div>
          <div class='w-full p-3 bg-amber-50 my-2 rounded-lg border border-gray-300 hover:bg-amber-100 hover:shadow-md transition-colors duration-300 ease-in-out cursor-pointer flex items-center'>
            <input class=' cursor-pointer w-4 h-4' type="radio" value='berlin' name='option' />
            <label class='ml-3 text-[20px]'>Berlin</label>
          </div>
        </div>
      </div>
      <button class='mt-4 bg-blue-400 w-40 h-10 m-auto text-white text-[20px] font-semibold rounded-[8px] cursor-pointer hover:bg-blue-500 hover:scale-105 transition-all duration-300 ease-in-out'>Next</button>
    </div>
  )
}

export default App
