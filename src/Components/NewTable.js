import React from 'react';
import icon from "../Components/Image/Vector-page-001.jpg"
import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import { defaultTheme } from 'react-select';

const sampleJson = [
    {
        "id": 1,
        "taskName": 'task 1',
        "lob": 'MEDICARE',
        "subTask": 'aaa',
        "step": 0,
        "dueDate": '70%',
        "due": '09/10/1990 @9.00 AM'
    },
    {
        "id": 2,
        "taskName": 'task 2',
        "lob": 'COMMERCIAL',
        "subTask": 'bbb',
        "step": 0,
        "dueDate": '30%',
        "due": '07/10/2000 @10.30 AM'
    },
    {
        "id": 3,
        "taskName": 'task 3',
        "lob": 'EXCHANGE',
        "subTask": 'ccc',
        "step": 1,
        "dueDate": '50%',
        "due": '23/10/2003 @7.45 PM'
    },
    {
        "id": 4,
        "taskName": 'task 4',
        "lob": 'MEDICAID',
        "subTask": 'ddd',
        "step": 1,
        "dueDate": '45%',
        "due": '25/6/2008 @4.00 PM'
    },
    {
        "id": 5,
        "taskName": 'task 5',
        "lob": 'EXCHANGE',
        "subTask": 'eee',
        "step": 1,
        "dueDate": '85%',
        "due": '09/01/1992 @3.00 AM'
    },
    {
        "id": 6,
        "taskName": 'task 6',
        "lob": 'MEDICAID',
        "subTask": 'ddd',
        "step": 0,
        "dueDate": '90%',
        "due": '30/02/2000 @9.20 PM'
    },

    {
        "id": 7,
        "taskName": 'task 7',
        "lob": 'MEDICAID',
        "subTask": 'eee',
        "step": 1,
        "dueDate": '20%',
        "due": '14/07/2002 @3.20 AM'
    },
    {
        "id": 8,
        "taskName": 'task 8',
        "lob": 'EXCHANGE',
        "subTask": 'fff',
        "step": 1,
        "dueDate": '50%',
        "due": '11/11/2010 @2.00 PM'
    },
    {
        "id": 9,
        "taskName": 'task 9',
        "lob": 'MEDICAID',
        "subTask": 'ggg',
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
    { name: 'Unassigned', value: 'Unassigned' },
    { name: 'Assigned', value: 'Assigned' },
    { name: 'Derek Roberts', value: 'Derek Roberts' },
    { name: 'Nichole Smith', value: 'Nichole Smith' },

]

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
            postData: []
        }
        this.onMultiSelect = this.onMultiSelect.bind(this)
        this.filterFunction = this.filterFunction.bind(this)
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

    filterFunction(e) {
        console.log('valueeee for filter', e.target.value)
        var input, filter, ul, li, a, i;
        input = e.target.value;
        filter = dropDownMenuList.filter(item => {
            // const res = item.name.fi
        });
        console.log('filter', filter)
        // div = document.getElementById("myDropdown");
        // a = div.getElementsByTagName("a");
        // for (i = 0; i < a.length; i++) {
        //     txtValue = a[i].textContent || a[i].innerText;
        //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //         a[i].style.display = "";
        //     } else {
        //         a[i].style.display = "none";
        //     }
        // }
    }

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

                    <div class="dropdown drpdown">
                        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={this.filterFunction} />
                            {dropDownMenuList.map((option) => <li> {option.name} </li>)}
                        </ul>
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
                                    <th scope="col" className="headerWidth"><div className="imgProcess"> <img src={icon} className="rounded mx-auto d-block" alt="#1" /> </div></th>
                                    <th scope="col" className="headerWidth">
                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                    </th>
                                    <th scope="col">TASK NAME</th>
                                    <th scope="col">LOB</th>
                                    <th scope="col">SUBTASKS</th>
                                    <th scope="col">ASSIGNED TO</th>
                                    <th scope="col">DUE DATE</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.postData}
                                {/* {
                                    this.state.data.length !== 0 && slice.map((item) =>
                                        <tr key={item.id}>
                                            <th scope="row"></th>
                                            <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                                            <td>{item.taskName}</td>
                                            <td>{item.lob === 'MEDICAID' ? (<span className="badge badge-pill badge-light peach">MEDICAID</span>) : item.lob === 'EXCHANGE' ? (<span className="badge badge-pill badge-light exchange">EXCHANGE</span>) : item.lob === 'COMMERCIAL' ? (<span className="badge badge-pill badge-light commercial">COMMERCIAL</span>) : item.lob === 'MEDICARE' && (<span className="badge badge-pill badge-light medicare">MEDICARE</span>)} </td>
                                            <td>
                                                <div class="dropdown">
                                                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                                                    <div id="myDropdown" class="dropdown-content">
                                                        <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
                                                        <a href="#about">About</a>
                                                        <a href="#base">Base</a>
                                                        <a href="#blog">Blog</a>
                                                        <a href="#contact">Contact</a>
                                                        <a href="#custom">Custom</a>
                                                        <a href="#support">Support</a>
                                                        <a href="#tools">Tools</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.step === 0 ? "In Review" : "In Build"}</td>
                                            <td>{<meter id="disk_d" className="disk_d" value="0.6">60%</meter>}</td>
                                        </tr>
                                    )
                                } */}


                                {/* 
                                <tr>
                                    <th scope="row"></th>
                                    <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr> */}
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