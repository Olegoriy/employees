import { Component } from 'react';

import './employees-list-item.css';
import clsx from 'clsx';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = (event) => {
        event.stopPropagation();
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        return (
            <button onClick={this.onLike} className={clsx("list-group-item d-flex justify-content-between", { increase: !!increase, like: !!like })}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
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
}

export default EmployeesListItem;