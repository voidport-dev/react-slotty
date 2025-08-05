import { Slot, SlotMachine } from "react-slotty";
import { useState } from "react";
import "./App.css";
import type { FruitItem } from "./types/fruit-item";
import { slots } from "./slots";
import { getRarityColor } from "./utils/get-rarity-color";

function App() {
  const [selectedItem] = useState<FruitItem | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <main>
      <h1>🎰 React Slotty Demo</h1>

      <SlotMachine className="slot-machine">
        {slots.map((slot) => (
          <Slot
            key={slot.id}
            className="slot"
            style={{ background: getRarityColor(slot.rarity) }}
          >
            {slot.name}
          </Slot>
        ))}
      </SlotMachine>

      <button
        className="spin-button"
        onClick={() => setIsSpinning(true)}
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning...." : "Spin"}
      </button>

      <div>
        {selectedItem && <h2>Selected Item</h2>}
        {selectedItem && (
          <div>
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.rarity}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
