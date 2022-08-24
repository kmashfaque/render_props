import { useState } from 'react'

function Counter(props) {

    const [counter, setCounter] = useState(0)

    const increamentCount=()=>{
        setCounter(prevCount=>prevCount+1)
    }
    const {render}=props
  return render(counter,increamentCount)
}

export default Counter