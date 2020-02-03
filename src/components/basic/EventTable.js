import React, { Component } from 'react';
import { DataTable, Pagination, OverflowMenu, OverflowMenuItem, Select, SelectItem, MultiSelect } from 'carbon-components-react';
import { iconFilter } from 'carbon-icons';
import { reduce, filter } from 'lodash';

import PropTypes from 'prop-types';

const {
    TableContainer,
    TableToolbar,
    TableToolbarSearch,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader,
} = DataTable;

/**
 * Display cases in a table with a search bar and row menu options to perform actions on an individual case.
 *
 * @visibleName Case Data Table
 */
class EventTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startRow: 0,
            endRow: 10,
            allEventData: props.rows,
            filteredEventData: props.rows,
            filter: "ALL"
        };

        this.filterMenuProps = {
            icon: iconFilter,
            onClick: this.handleFilterChange,
            onKeyUp: this.handleFilterChange
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.addOverflowMenu = this.addOverflowMenu.bind(this);
    }

    componentDidMount() {
        console.log('EventTable.componentDidMount', this.props, this.state)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('EventTable.componentDidUpdate', this.props, prevProps, this.state, prevState)
        if (this.state.allEventData !== this.props.rows) {
            console.log('EventTable.componentDidUpdate: Loading NEW data')
            this.setState({
                allEventData: this.props.rows,
                filteredEventData: this.props.rows,
                filterValue: ''
            })
        }
    }


    /**
     * Filter cases by name that start with search text, or reset if search text undefined.
     * @param {*} e 
     */
    handleSearch(e, headerList) {
        console.log('search', e.target.value, this.state.allEventData, headerList);
        if (e.target.value) {
            var filterEventList = [];
            filterEventList = reduce(this.state.allEventData, function (result, res) {
                headerList.forEach((h) => {
                    for (var index in res) {
                        if (index === h.key) {
                            var attr = res[index].toString();
                            if ((typeof attr === 'string' || attr instanceof String) && attr.length > 0) {
                                var splitName = attr.toLowerCase().split(" ");
                                splitName.map((s, index) => {
                                    return (s.startsWith(e.target.value.toLowerCase(), 0) || s.indexOf(e.target.value.toLowerCase()) !== -1) ?
                                        (filterEventList.indexOf(res) < 0 ? filterEventList.push(res) : {}) : {}
                                })
                            }
                        }
                    }
                });
                return filterEventList;
            }, {});
            this.setState({ filteredEventData: filterEventList });
        } else
            this.setState({ filteredEventData: this.state.allEventData });
    }

    filterResources(filterValue) {
        console.log('filter', filterValue, this.state)
        // const { match: { params }, resources } = this.props;
        var value = filterValue // ? filterValue : this.state.filterValue;
        return (filterValue ?
            filter(this.state.allEventData, v => {
                return (v.series.toLowerCase() === value.toLowerCase());
            })
            :
            this.state.filteredEventData);
    }

    onFilter(value) {
        console.log('filter=', value)
        var newList = []
        var finalList = []
        if (value.length > 0) {
            value.map((series) => {
                newList.push(this.filterResources(series.id))
            })
            console.log('newlist', newList)
            newList.map((series) => {
                series.map((event) => {
                    finalList.push(event);
                })                
            })
            console.log('final list', finalList)
            this.setState({ filteredEventData: finalList });
        } else {
            this.setState({ filteredEventData: [] });
        }
    }

    addOverflowMenu(row) {
        return (
            <OverflowMenu floatingMenu onOpen={() => this.props.openMenuAction(row.id)} >
                {this.props.menuItems.map((item, index) => {
                    return (
                        <OverflowMenuItem key={row.id + '_' + index} itemText={item.text} onClick={() => item.action(row.id)} disabled={item.isDisabled} />)
                })}
            </OverflowMenu>

        );
    }

    // setStartEndRowValues()
    handlePageChange(e) {
        console.log('e is', e)
        const selected = e.pageSize// === 'ALL' ? -1 : e.pageSize;
        const startRow = selected * (e.page - 1)
        const endRow = selected * e.page
        this.setState({
            startRow: startRow,
            endRow: endRow
        });
    }
    /**
     * render EventTable element into root DOM node
     */
    render() {
        const { startRow, endRow } = this.state;
        console.log('louise events ', this.state)
        return (
            <DataTable
                rows={this.state.filteredEventData}
                headers={this.props.headers}
                size="compact"
                isSortable
                useZebraStyles={false}
                render={({ rows, headers, getHeaderProps }) => (
                    <TableContainer>

                        <TableToolbar style={{ overflow: 'visible' }} className="tableToolbarlouise tableToolbarOverflow">
                            <MultiSelect
                                id="carbon-multiselect-example"
                                initialSelectedItems={this.getItemNames()}
                                type='inline'
                                items={this.getItemNames()}
                                label="Filter Event Series"
                                onChange={({ selectedItems }) => {
                                    this.onFilter(selectedItems);
                                }}
                                useTitleInItem={true}
                                translateWithId={function noRefCheck() { }}
                            />

                            <TableToolbarSearch onChange={(e) => this.handleSearch(e, headers)} placeHolderText="Search events" />
                        </TableToolbar>
                        <Table className="tableBackgroundColor">
                            <TableHead>
                                <TableRow>
                                    {headers.map(header => (
                                        <TableHeader {...getHeaderProps({ header })}>
                                            {header.header}
                                        </TableHeader>
                                    ))}
                                    <TableHeader />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(startRow, endRow).map(row => (
                                    <TableRow key={row.id}>
                                        {row.cells.map(cell => (
                                            <TableCell key={cell.id}>{cell.value}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Pagination
                            totalItems={this.state.filteredEventData.length}
                            pageSize={10}
                            pageSizes={[10, 20, 30, this.state.filteredEventData.length]}
                            onChange={e => this.handlePageChange(e)}
                        />
                    </TableContainer>
                )}
            />
        )
    }

    getItemNames() {
        let items = []
        this.props.filterBy.map(o => {
            return o ? items.push({ id: o.id, text: o.shortname, label: o.shortname }) : "";
        });
        console.log('items==', items)
        return items
    }
}

/**
 * Type checking
 */
EventTable.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.shape({
        /** Account identifier */
        key: PropTypes.string.isRequired,
        /** Name of the account */
        header: PropTypes.string.isRequired,
    })),
    rows: PropTypes.array,
}

/**
 * Default values
 */
EventTable.defaultProps = {
    headers: [],
    rows: [],
}

export default EventTable;
