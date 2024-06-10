import { useSelector } from "react-redux"
const Notification = () => {
  const Notification=useSelector(state=>state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (Notification){
    return(
     <div style={style}>
      {Notification}
    </div> 
    )
  }
  return null 
    
}

export default Notification