

const ClickCounter = (props) => {
    
    return (
        <div>
        <button type='button'onClick={props.increamentCount}>Clicked {props.counter} times...</button>
    </div>
  )
}

export default ClickCounter
