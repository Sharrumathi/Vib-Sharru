import React from 'react';
// import icon from "../Components/Image/Vector-page-001.jpg"
// import icon from "public\images\Vector-page-001.jpg";
import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import { defaultTheme } from 'react-select';

const sampleJson = [
    {
        "id": 1,
        "taskName": 'task 1',
        "lob": 'MEDICARE',
        "subTask": 'Sub Task 1',
        "step": 0,
        "dueDate": '70%',
        "due": '09/10/1990 @9.00 AM'
    },
    {
        "id": 2,
        "taskName": 'task 2',
        "lob": 'COMMERCIAL',
        "subTask": 'Sub Task 2',
        "step": 0,
        "dueDate": '30%',
        "due": '07/10/2000 @10.30 AM'
    },
    {
        "id": 3,
        "taskName": 'task 3',
        "lob": 'EXCHANGE',
        "subTask": 'Sub Task 3',
        "step": 1,
        "dueDate": '50%',
        "due": '23/10/2003 @7.45 PM'
    },
    {
        "id": 4,
        "taskName": 'task 4',
        "lob": 'MEDICAID',
        "subTask": 'Sub Task 4',
        "step": 1,
        "dueDate": '45%',
        "due": '25/6/2008 @4.00 PM'
    },
    {
        "id": 5,
        "taskName": 'task 5',
        "lob": 'EXCHANGE',
        "subTask": 'Sub Task 5',
        "step": 1,
        "dueDate": '85%',
        "due": '09/01/1992 @3.00 AM'
    },
    {
        "id": 6,
        "taskName": 'task 6',
        "lob": 'MEDICAID',
        "subTask": 'Sub Task 6',
        "step": 0,
        "dueDate": '90%',
        "due": '30/02/2000 @9.20 PM'
    },

    {
        "id": 7,
        "taskName": 'task 7',
        "lob": 'MEDICAID',
        "subTask": 'Sub Task 7',
        "step": 1,
        "dueDate": '20%',
        "due": '14/07/2002 @3.20 AM'
    },
    {
        "id": 8,
        "taskName": 'task 8',
        "lob": 'EXCHANGE',
        "subTask": 'Sub Task 8',
        "step": 1,
        "dueDate": '50%',
        "due": '11/11/2010 @2.00 PM'
    },
    {
        "id": 9,
        "taskName": 'task 9',
        "lob": 'MEDICAID',
        "subTask": 'Sub Task 9',
        "step": 0,
        "dueDate": '73%',
        "due": '20/20/2020 @12.00 PM'
    },
]

const Svg = p => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        {...p}
    />
);

const { colors } = defaultTheme;

const DropdownIndicator = () => (
    <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
        <Svg>
            <path
                d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </Svg>
    </div>
);

const dropDownMenuList = [
    { label: 'Unassigned', value: 'Unassigned' },
    { label: 'Assigned', value: 'Assigned' },
    { label: 'Derek Roberts', value: 'Derek Roberts' },
    { label: 'Nichole Smith', value: 'Nichole Smith' },

]

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200,
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            data: [],
            offset: 0,
            perPage: 4,
            currentPage: 0,
            activePage: 1,
            pageRangeDisplayed: 5,
            postData: [],
            value1: false,
            value2: false
        }
        this.onMultiSelect = this.onMultiSelect.bind(this)
    };

    onMultiSelect() {
        this.setState({
            checked: !this.state.checked
        })
    }

    onClearFilter() {
        this.setState({
            checked: true
        })
    }
    componentDidMount() {
        this.receivedData();
    }

    onChange = option => {
        if (this.state.value2.value === option.value) {
            this.setState({
                value1: option,
                value2: false
            });
        } else {
            this.setState({ value1: option });
        }
    };

    receivedData() {

        const selectStyles = {
            control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
            menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
        };

        const options = [
            { value: '1', label: 'Item 1' },
            { value: '2', label: 'Item 2' },
            { value: '3', label: 'Item 3' }
        ]

        this.setState({
            data: sampleJson
        })

        const data = sampleJson;

        const slice = data.length !== 0 && data.slice(this.state.offset, this.state.offset + this.state.perPage)

        const postData = data.length !== 0 && slice.map((item) =>

            <tr key={item.id}>
                <th scope="row"></th>
                <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                <td>{item.taskName}</td>
                <td>{item.lob === 'MEDICAID' ? (<span className="badge badge-pill badge-light peach">MEDICAID</span>) : item.lob === 'EXCHANGE' ? (<span className="badge badge-pill badge-light exchange">EXCHANGE</span>) : item.lob === 'COMMERCIAL' ? (<span className="badge badge-pill badge-light commercial">COMMERCIAL</span>) : item.lob === 'MEDICARE' && (<span className="badge badge-pill badge-light medicare">MEDICARE</span>)} </td>

                <td>
                    <span> {item.subTask}</span>
                </td>

                <td>
                    <div>
                        <Select
                            onChange={this.onChange}
                            options={dropDownMenuList}
                            value={this.state.value1}
                        />
                    </div>
                </td>
                <td>{item.step === 0 ? "In Review" : "In Build"}</td>
                <td><div class="progress">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow={item.dueDate}
                        aria-valuemin="0" aria-valuemax="100" style={{ width: item.dueDate }}>
                        <span> {item.due} </span>
                    </div>
                </div>
                </td>
            </tr>
        )


        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),

            postData
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    render() {

        const slice = this.state.data.length !== 0 && this.state.data.slice(this.state.offset, this.state.offset + this.state.perPage)

        return (

            <div className="container-fluid">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">UNASSIGNED TASKS</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">ASSIGNED TASKS</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">ALL TASKS</a>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <nav className="nav">
                            <a className="nav-link" aria-current="page">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={this.onMultiSelect} checked={this.state.checked} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Multi Sort</label>
                                </div>
                            </a>
                            <a href="#" className="btn btn-outline-secondary btn-lg" tabIndex="-1" role="button" onClick={() => this.onClearFilter()}>
                                <ion-icon name="close-circle-outline"></ion-icon> Clear All Filters</a>

                            <span className="nav-link result"> Result 1 to 5 of 144 </span>

                            <div className="nav-link navData">
                                <span className="perPage"> Items per page </span>
                                <select id="items" className="buttonData">
                                    <option value="item-1" >5</option>
                                    <option value="item-2">10</option>
                                </select>
                            </div>

                            <div>

                                <ReactPaginate
                                    breakLabel={""}
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    // breakClassName={"break-me"}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}
                                    pageRangeDisplayed={3}
                                    pageCount={this.state.pageCount}
                                    onPageChange={this.handlePageClick}
                                />

                            </div>

                            <div className="nav-link navData">
                                <span className="perPage"> Go to page </span>
                                <input type="text" value="3" className="goPage" />
                                <span className="perPage"> of 10 </span>
                            </div>
                        </nav>
                        <table className="table table-bordered">
                            <thead className="table-bordered ">
                                <tr>
                                    <th scope="col" className="headerWidth"><div className="imgProcess"> <img src="images/Vector-page-001.jpg" className="rounded mx-auto d-block" alt="#1" /> </div></th>
                                    <th scope="col" className="headerWidth">
                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                    </th>
                                    <th scope="col">TASK NAME</th>
                                    <th scope="col">LOB</th>
                                    <th scope="col">SUBTASKS</th>
                                    <th scope="col">ASSIGNED TO</th>
                                    <th scope="col">STEPS</th>
                                    <th scope="col">DUE DATE</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.postData}
                            </tbody>
                        </table>

                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>
            </div>
        )
    }
}

export default Table;