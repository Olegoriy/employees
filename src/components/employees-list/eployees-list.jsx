import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}><EmployeesListItem  {...itemProps} onDelete={() => onDelete(id)} /></li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;