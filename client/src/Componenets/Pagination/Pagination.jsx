import Pagination from '@material-ui/lab/Pagination';
import './pagination.scss'

const PaginationComp = ({nextPage,pagination}) => {

    const handleChange=(event,value)=>{
        nextPage(value,pagination.isSearch)
    }
    return (
        <div className='pagination-container'>
            <Pagination page={pagination.current} count={Number(pagination.total)} onChange={handleChange} />
        </div>
    )
}

export default PaginationComp
