import './employees-list-item.css';
import clsx from 'clsx';

const EmployeesListItem = (props) => {
        const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;

        return (
            <button onClick={onToggleRise} className={clsx("list-group-item d-flex justify-content-between", { increase: !!increase, rise: !!rise })}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </button>
        )
}

export default EmployeesListItem;