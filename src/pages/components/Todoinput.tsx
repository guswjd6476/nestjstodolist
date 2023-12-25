
export default function Todoinput({placeholder, func, value,editfunc}) {

  return (
	<input
	type="text"
	placeholder={placeholder}
	className="p-2 border-solid border-2 border-balck-600 mb-1 text-black-900"
	onChange={func}
	value={value} 
	defaultValue={editfunc?value:''}
  />
  );
}
