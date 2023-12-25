
export default function Todotextarea({placeholder, func, value,row,editfunc}) {
	return (
	  <textarea
	  type="text"
	  placeholder={placeholder}
	  className="p-2 border-solid border-2 border-balck-600 rounded mb-1 text-slate-900"
	  onChange={func}
	  value={value} 
	  defaultValue={editfunc?value:''}
	  rows={row}
	/>
	);
  }
  