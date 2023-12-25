
export default function Todostatistics({todos}) {

	return (
		<ul className="mb-4">
		<li>
		  <span>전체 투두리스트 : </span>
		  <span>{todos ? todos.length : 0}개</span>
		</li>
		<li>
		  <span>완료한 투두시리즈: </span>
		  <span>{todos ? todos.filter(value => value.done).length : 0}개</span>
		</li>
		<li>
		  <span>미완료한 투두시리즈: </span>
		  <span>{todos ? todos.filter(value => !value.done).length : 0}개</span>
		</li>
	  </ul>
	);
  }
  