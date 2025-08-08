import { useState } from "react"


function App() {

  const [a, set_a] = useState(0)
  const [z, set_z] = useState(0)

  function plus1()
  {
    console.log("뚱땅")

    let b = a + 1
    set_a(b)

    set_a(a+1)

    alert('뚱땅')

  }

  function h1()
  {
    alert('얼렁')
  }

  function p1()
  {
    alert('조밀')
  }

  function p2()
  {
    set_z(z-1)

    alert('오밀')
  }

  return (
    <>
      <button onClick={plus1}>얼렁 : {a}</button>
      <button onClick={h1}>뚱땅</button><br />
      <button onClick={p1}>오밀</button>
      <button onClick={p2}>조밀 : {z}</button><br />
    </>
  )
}

export default App