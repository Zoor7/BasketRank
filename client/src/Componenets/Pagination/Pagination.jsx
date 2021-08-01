import Pagination from '@material-ui/lab/Pagination';
import './pagination.scss'

const PaginationComp = ({setPagination,pages}) => {

    const handleChange=(event,value)=>{
        setPagination((prev)=>{return{...prev,current:value}})
    }
    return (
        <div className='pagination-container'>
            <Pagination count={pages-1} onChange={handleChange} />
        </div>
    )
}

export default PaginationComp
