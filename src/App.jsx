import Card from "./components/Card"

function App() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <header className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Checkpoint Front-End
        </h1>
        <h2 className="text-xl font-bold text-gray-900">
          Marcos Vinícios Corrêa dos Santos
        </h2>
        <h4 className="mt-2 text-base font-semibold text-gray-600">
          RM571080
        </h4>
      </header>
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8">
        <p className="w-full max-w-2xl rounded-2xl bg-gray-300 p-6 text-center text-base leading-relaxed text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Veniam delectus sunt doloribus corporis blanditiis veritatis,
          odit in voluptate ipsam fugiat vero. Nesciunt velit nulla
          magni sed dignissimos debitis reprehenderit excepturi!
        </p>
        <Card />
      </section>
    </main>
  )
}

export default App