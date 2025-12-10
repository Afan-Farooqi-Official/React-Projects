import './App.css'
import questions from './Questions'
import { useState } from 'react'

function App() {

  const [currentQ, setcurrentQ] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)

  const handleOptionChange = (index) => {
    setSelected(index)
  };

  const handleNext = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score+1)
    }
    setSelected(null);

    if (currentQ + 1 < questions.length) {
      setcurrentQ(currentQ+1)
    } else {
      setcurrentQ(questions.length)
    }
  }

  const handlePrev = () => {
    if (currentQ > 0) {
      setcurrentQ(currentQ-1)
    }
  }

  const handleReset = () => {
    setcurrentQ(0)
    setSelected(null)
    setScore(0)
  }

  return (
    <div class='bg-gray-100 w-4xl h-[90vh] flex m-auto mt-4 rounded-2xl flex-col overflow-hidden'>
      <div class='flex h-16 bg-blue-400'>
        <div onClick={handlePrev} class='mt-5 ml-5 text-white transition duration-200 ease-in-out cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </div>
        <h1 class='ml-[40%] flex mt-3 text-white font-bold text-4xl'>Quiz</h1>
      </div>
      {currentQ < questions.length ? (
        <>
        <div>
        <div class='bg-gray-50 w-11/12 mx-auto mt-5 rounded-lg px-6 py-5 shadow-md'>
          <h2 class='font-bold text-lg'>Question: {currentQ + 1} of {questions.length}</h2>
          <p class='mt-3 text-base font-semibold'>{questions[currentQ].question}</p>
        </div>
        <div class='w-[90%] m-auto mt-5 rounded-md py-5 flex flex-col'>
          {questions[currentQ].options.map((opt, index) => (
            <label key={index} class={`flex items-center p-3 rounded-lg border cursor-pointer transition my-1.5 ${selected === index ? "bg-blue-100 border-blue-400": "bg-white border-gray-200 hover:bg-gray-50"}`}>
            <input type="radio" name="option" checked={selected === index} onChange={()=>handleOptionChange(index)} class="w-4 h-4 text-blue-600 cursor-pointer" />
              <span class="ml-3 text-lg text-gray-800">{opt}</span>
            </label>
          ))}
        </div>
      </div>
        <button onClick={handleNext} disabled={selected===null} class='mt-4 mx-auto w-40 h-12 bg-blue-500 text-white text-lg font-semibold rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-105 transition-colors duration-300 ease-in-out'>Next</button>
        </>
      ): (
        <>
          <div class='flex flex-col items-center mt-10'>
            <h2 class='text-2xl font-bold'>Quiz Finished</h2>
            <p class='mt-2 text-lg'>Your score: {score} / {questions.length}</p>
          </div>
          <button onClick={handleReset} class='bg-blue-400 text-white text-[20px] text-center mt-4 w-40 h-12 mx-auto rounded-sm hover:bg-blue-600 hover:scale-105 transition-colors duration-300 ease-in-out cursor-pointer'>
            Reset
          </button>
        </>
      )}
    </div>
  )
}

export default App
