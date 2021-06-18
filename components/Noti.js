const Noti = ({msg, handleShow, bgColor}) =>{
  return(
    <div className={`flex items-center ${bgColor} border-l-4 border-green-700 py-2 px-3 shadow-md mb-2 justify-between h-16`}>
      
   <div className="text-white max-w-xs ">
     {msg.msg}
   </div>

   <button className="text-white right-0" type="button" data-dismiss="Noti" onClick={handleShow}>X</button>
 </div>
  )}


export default Noti