
const GlobalFilter = ({filter,setfilter})=>{
    return(
        <span className="searchDiv">
            Search:{' '}
            <input value={filter || ''}
            onChange={e=>setfilter(e.target.value)}
            className="searchTable"
            />
        </span>
    )
}
export default GlobalFilter