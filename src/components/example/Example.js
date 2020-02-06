import React, { useState } from "react"

const ExampleComponent = props => {
  const [infection, setInfection] = useState("")
  const [buttonClicked, setButtonClicked] = useState(false)
  const buttonText = buttonClicked ? "ZOMBIES!!!" : "Dead Inside"

  function zombieAttack() {
    setInfection("You've been bitten!")
    setButtonClicked(true)
  }

  return (
    <>
      <h1>An Example Page Component</h1>
      <h2 id="example-title">{props.componentTitle}</h2>
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
      {infection ? <h1 data-testid="message">{infection}</h1> : null}
    </>
  )
}

export default ExampleComponent
