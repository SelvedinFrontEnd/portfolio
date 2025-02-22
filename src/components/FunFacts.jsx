import React from 'react'



function FunFacts() {     
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center ">
      <h3 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">
        Fun Facts 🏆
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200 px-4 py-2 rounded-lg text-lg font-medium">
          ❤️ Lifelong Liverpool Supporter
        </span>
        <span className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 px-4 py-2 rounded-lg text-lg font-medium">
          ⚡ Huge Formula 1 Fan
        </span>
        <span className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 px-4 py-2 rounded-lg text-lg font-medium">
          📖 Always Learning New Tech
        </span>
        <span className="bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-200 px-4 py-2 rounded-lg text-lg font-medium">
          💪 Loves Street Workout
        </span>
      </div>
    </section>
    
  )
}

export default FunFacts