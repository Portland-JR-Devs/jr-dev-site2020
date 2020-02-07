import React, { useState } from "react"

const ExampleComponent = () => {
  const [infection, setInfection] = useState("")
  const [buttonClicked, setButtonClicked] = useState(false)
  const buttonText = buttonClicked ? "ZOMBIES!!!" : "Dead Inside"

  const zombieAttack = () => {
    setInfection("You've been bitten!")
    setButtonClicked(true)
  }

  return (
    <>
      <h1>An Example Page Component</h1>
      <h2>Zombie Apocalypse</h2>
      <p>
        Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora
        quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead
        dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus
        vultus comedat cerebella viventium. Qui offenderit rapto, terribilem
        incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search
        for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut
        malus movie horror.
      </p>
      <button onClick={zombieAttack} disabled={buttonClicked}>
        {buttonText}
      </button>
      {infection ? <h1>{infection}</h1> : null}
    </>
  )
}

export default ExampleComponent
