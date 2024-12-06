import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const ref = useRef(null);
  const [quiz1val, setQuiz1] = useState(localStorage.getItem('quiz1') || 0);
  const [quiz2val, setQuiz2] = useState(localStorage.getItem('quiz2') || 0);
  const [quiz3val, setQuiz3] = useState(localStorage.getItem('quiz3') || 0);
  const [quiz4val, setQuiz4] = useState(localStorage.getItem('quiz4') || 0);
  const [quiz5val, setQuiz5] = useState(localStorage.getItem('quiz5') || 0);
  const [quiz6val, setQuiz6] = useState(localStorage.getItem('quiz6') || 0);
  const [quiz7val, setQuiz7] = useState(localStorage.getItem('quiz7') || 0);
  const [quiz8val, setQuiz8] = useState(localStorage.getItem('quiz8') || 0);
  const [quiz9val, setQuiz9] = useState(0);
  const [quiz10val, setQuiz10] = useState(localStorage.getItem('quiz10') || 0);
  const [quiz11val, setQuiz11] = useState(localStorage.getItem('quiz11') || 0);
  const [quiz12val, setQuiz12] = useState(localStorage.getItem('quiz12') || 0);
  const [quiz13val, setQuiz13] = useState(localStorage.getItem('quiz13') || 0);
  const [quiz14val, setQuiz14] = useState(localStorage.getItem('quiz14') || 0);

  const [hw1val, setHW1] = useState(localStorage.getItem('hw1') || 0);
  const [hw2val, setHW2] = useState(localStorage.getItem('hw2') || 0);
  const [hw3val, setHW3] = useState(localStorage.getItem('hw3') || 0);
  const [hw4val, setHW4] = useState(localStorage.getItem('hw4') || 0);
  const [hw5val, setHW5] = useState(localStorage.getItem('hw5') || 0);

  const [competition, setCompetition] = useState(localStorage.getItem('competition') || -1);

  useEffect(() => {
    const handleChangeNative = () => {};
    const handleInputNative = () => {};
    addEventListener('change', handleChangeNative);
    addEventListener('input', handleInputNative);

    return () => {
      removeEventListener('input', handleInputNative);
      removeEventListener('change', handleChangeNative);
    };
  }, []);

  let all_quiz = [parseFloat(quiz1val), parseFloat(quiz2val), parseFloat(quiz3val), parseFloat(quiz4val), parseFloat(quiz5val), parseFloat(quiz6val), parseFloat(quiz7val), parseFloat(quiz8val), parseFloat(quiz9val), parseFloat(quiz10val), parseFloat(quiz11val), parseFloat(quiz12val), parseFloat(quiz13val), parseFloat(quiz14val)]
  let top_quiz = all_quiz.sort(function(a,b) { return a - b;}).slice(8);
  let top_quiz_score = eval(top_quiz.join('+'));
  let quiz_contribution = (top_quiz_score / top_quiz.length) * 10 * 0.3;

  let all_hw = [parseFloat(hw1val), parseFloat(hw2val), parseFloat(hw3val), parseFloat(hw4val), parseFloat(hw5val)]
  let hw_score = eval(all_hw.join('+'));
  let hw_contribution = (hw_score / all_hw.length) * 10 * 0.6;

  let estimated_score = 0
  if (competition === -1){
    estimated_score = (quiz_contribution + hw_contribution) / 0.9
  }
  else {
    let my_competition = (10 + competition) * 10 * 0.1;
    estimated_score = (quiz_contribution + hw_contribution + my_competition)
  }

  return (
    <>
      <a href="https://canvas.umn.edu/courses/460454/grades" className="text-base font-medium">Shortcut to Canvas Grades</a>
      <div className="flex flex-rows justify-center items-center text-lg pb-3">
        Predicted Grade: {parseFloat(estimated_score.toFixed(2))}%
      </div>

      <div className="flex columns-2 gap-10">
        <div>
          <h3 className='font-bold p-2.5'>Quizzes</h3>
          <div className="flex flex-row justify-center items-center columns-2 gap-4">
            <div>
              <div>
                  <label htmlFor="Quiz1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz1</label>
                  <input 
                    type="number" ref={ref} value={quiz1val} onChange={(event) => {setQuiz1(event.currentTarget.value); localStorage.setItem("quiz1", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz2</label>
                  <input 
                    type="number" ref={ref} value={quiz2val} onChange={(event) => {setQuiz2(event.currentTarget.value); localStorage.setItem("quiz2", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz3</label>
                  <input 
                    type="number" ref={ref} value={quiz3val} onChange={(event) => {setQuiz3(event.currentTarget.value); localStorage.setItem("quiz3", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz4</label>
                  <input 
                    type="number" ref={ref} value={quiz4val} onChange={(event) => {setQuiz4(event.currentTarget.value); localStorage.setItem("quiz4", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz5" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz5</label>
                  <input 
                    type="number" ref={ref} value={quiz5val} onChange={(event) => {setQuiz5(event.currentTarget.value); localStorage.setItem("quiz5", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz6" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz6</label>
                  <input 
                    type="number" ref={ref} value={quiz6val} onChange={(event) => {setQuiz6(event.currentTarget.value); localStorage.setItem("quiz6", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz7" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz7</label>
                  <input 
                    type="number" ref={ref} value={quiz7val} onChange={(event) => {setQuiz7(event.currentTarget.value); localStorage.setItem("quiz7", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
            </div>

            <div>
              <div>
                  <label htmlFor="Quiz8" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz8</label>
                  <input 
                    type="number" ref={ref} value={quiz8val} onChange={(event) => {setQuiz8(event.currentTarget.value); localStorage.setItem("quiz8", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz9" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz9</label>
                  {/* <div
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">0</> */}
                  <div
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg text-left focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">0</div>
                  {/* <input 
                    type="number" ref={ref} value={quiz9val} onChange={(event) => {setQuiz9(event.currentTarget.value); localStorage.setItem("quiz9", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> */}
              </div>

              <div>
                  <label htmlFor="Quiz10" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz10</label>
                  <input 
                    type="number" ref={ref} value={quiz10val} onChange={(event) => {setQuiz10(event.currentTarget.value); localStorage.setItem("quiz10", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz11" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz11</label>
                  <input 
                    type="number" ref={ref} value={quiz11val} onChange={(event) => {setQuiz11(event.currentTarget.value); localStorage.setItem("quiz11", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz12" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz12</label>
                  <input 
                    type="number" ref={ref} value={quiz12val} onChange={(event) => {setQuiz12(event.currentTarget.value); localStorage.setItem("quiz12", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz13" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz13</label>
                  <input 
                    type="number" ref={ref} value={quiz13val} onChange={(event) => {setQuiz13(event.currentTarget.value); localStorage.setItem("quiz13", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div>
                  <label htmlFor="Quiz14" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quiz14</label>
                  <input 
                    type="number" ref={ref} value={quiz14val} onChange={(event) => {setQuiz14(event.currentTarget.value); localStorage.setItem("quiz14", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                    className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
            </div>
          </div>
          </div>
          <div>
          <div>
            <h3 className='font-bold p-2.5'>Homeworks</h3>
            <div>
              <label htmlFor="HW1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HW1</label>
                <input 
                  type="number" ref={ref} value={hw1val} onChange={(event) => {setHW1(event.currentTarget.value); localStorage.setItem("hw1", event.currentTarget.value);}} min="0" max="12" defaultValue="0"
                  className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="HW2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HW2</label>
                <input 
                  type="number" ref={ref} value={hw2val} onChange={(event) => {setHW2(event.currentTarget.value); localStorage.setItem("hw2", event.currentTarget.value);}} min="0" max="12" defaultValue="0"
                  className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="HW3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HW3</label>
                <input 
                  type="number" ref={ref} value={hw3val} onChange={(event) => {setHW3(event.currentTarget.value); localStorage.setItem("hw3", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                  className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="HW4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HW4</label>
                <input 
                  type="number" ref={ref} value={hw4val} onChange={(event) => {setHW4(event.currentTarget.value); localStorage.setItem("hw4", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                  className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="HW5" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HW5</label>
                <input 
                  type="number" ref={ref} value={hw5val} onChange={(event) => {setHW5(event.currentTarget.value); localStorage.setItem("hw5", event.currentTarget.value);}} min="0" max="10" defaultValue="0"
                  className="bg-gray-50 mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
          </div>

          <div>
            <h3 className='font-bold pt-6 pb-2.5'>Final Competition</h3>
            <div className='flex flex-rows justify-center items-center'>
              <div>
              <div className="flex">
                <input id="top3" type="radio" value="" name="final-competition" onChange={(event) => {setCompetition(3); localStorage.setItem("competition", 3);}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label forHtml="Top3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Top3</label>
              </div>

              <div className="flex">
                <input id="top5" type="radio" value="" name="final-competition" onChange={(event) => {setCompetition(2); localStorage.setItem("competition", 2);}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label forHtml="Top5" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Top5</label>
              </div>

              <div className="flex">
                <input id="top10" type="radio" value="" name="final-competition" onChange={(event) => {setCompetition(1); localStorage.setItem("competition", 1);}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label forHtml="Top10" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Top10</label>
              </div>

              <div className="flex">
                <input id="submitted" type="radio" value="" name="final-competition" onChange={(event) => {setCompetition(1); localStorage.setItem("competition", 0);}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label forHtml="submitted" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Submitted (Not on Leaderboard) </label>
              </div>
              
              <div className="flex">
                <input id="none" type="radio" value="" name="final-competition" onChange={(event) => {setCompetition(-1); localStorage.setItem("competition", -1);}} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label forHtml="None" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I give up</label>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5'>
        <a href='https://canvas.umn.edu/courses/460454/external_tools/72041'>Don't Forget to do SRT!</a>
        <p className='text-sm'>Last Updated: Dec 6th, 2024</p>
      </div>
      
    </>

    // <div>
    //   <input
    //     type='number'
    //     ref={ref}
    //     value={value}
    //     onChange={handleQ1}
    //   />
    //   <div>{value}</div>

    //   <input
    //     type='number'
    //     ref={ref}
    //     value={val2}
    //     onChange={handleQ2}
    //   />
    //   <div>{val2}</div>
    // </div>
  );
}

export default App
