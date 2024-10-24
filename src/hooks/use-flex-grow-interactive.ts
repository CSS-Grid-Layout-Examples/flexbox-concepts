/* node modules */
import { useState } from "react";

/* hook */
function useFlexGrowInteractive() {
  /* state */
  const [grow, setGrow] = useState<Record<string, number>[]>([
    {value: 0},
    {value: 0},
    {value: 0}
  ]);

  /**
    * @event: on increment
    */
  function onGrowIncrement(elementIndex: number): void {
    const composed = grow.splice(0);
    composed[elementIndex].value += 1;
    setGrow(() => composed);
  }

  /**
    * @event: on decrement
    */
  function onGrowDecrement(elementIndex: number): void {
    const composed = grow.splice(0);
    composed[elementIndex].value -= 1;
    composed[elementIndex].value <= 0 ? 0 : composed[elementIndex].value;
    setGrow(() => composed);
  }

  return {
    grow,
    onIncrement: onGrowIncrement,
    onDecrement: onGrowDecrement
  }
}

/* exports */
export default useFlexGrowInteractive;
