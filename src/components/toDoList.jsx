import React from "react";
// function ToDoList(props) {
//   const [isSet,changeIt]=React.useState(false);
//   function handleChange(){
//     changeIt(prevValue =>  !prevValue)
//   }
//   return <div onClick={handleChange}><li style={{textDecoration: isSet?"line-through":"none"}}>{props.list}</li></div>
// }
// export default ToDoList;
function ToDoList(props) {
  return (
    <div
      onClick={() => {
        props.deleteItem(props.id);
      }}
    >
      <li>{props.list}</li>
    </div>
  );
}
export default ToDoList;
