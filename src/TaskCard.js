export const TaskCard = ({task,handleDel}) => {
  return (
    <li className={task.started ? "yes" : "no"}>
    <span>{task.id} - {task.name}</span>
    <button onClick={() => handleDel(task.id)}>Delete</button>
  </li>
  )
}
