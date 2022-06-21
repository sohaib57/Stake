// import React, { useCallback, useMemo, useRef, useState } from 'react';
import React, { useState, useMemo } from 'react';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


var countDownDirection = true;

// the code below executes an action every 2,000 milliseconds.
// it's an interval, and each time it runs, it takes the next action
// from the 'actions' list below
const StartInterval = (api, columnApi) => {

    var actionIndex = 0;
    resetCountdown();
    executeAfterXSeconds();
    function executeAfterXSeconds() {
        setTimeout(function () {
            var action = getActions()[actionIndex];
            action(api, columnApi);
            actionIndex++;
            if (actionIndex >= getActions().length) {
                actionIndex = 0;
            }
            resetCountdown();
            executeAfterXSeconds();
        }, 3000);
    }
};

const resetCountdown = () => {
    document.querySelector('#animationCountdown').style.width = countDownDirection
        ? '100%'
        : '0%';
    countDownDirection = !countDownDirection;
};



const getActions = () => {
    return [
        // function (api, columnApi) {
        //     columnApi.applyColumnState({
        //         state: [{ colId: 'game', sort: 'asc' }],
        //         defaultState: { sort: null },
        //     });
        //     // setTitleFormatted('api', 'applyColumnState', "game: 'asc'");
        // },
        function (val1, val2) {
            const value1 = val1;
            const value2 = val2;
            if (value1 >= value2) {
                return value2 - value1
            }
            else if (value1 < value2) {
                return value1 - value2
            }
        },
        function (api, columnApi) {
            columnApi.applyColumnState({
                state: [
                    { colId: 'multiplier', sort: 'asc' },
                    { colId: 'betamount', sort: 'asc' },
                ],
                defaultState: { sort: null },
            });
            // setTitleFormatted(
            //     'api',
            //     'applyColumnState',
            //     "multiplier: 'asc', betamount 'asc'"
            // );
        },
        function (api, columnApi) {
            columnApi.applyColumnState({
                state: [
                    { colId: 'multiplier', sort: 'asc' },
                    { colId: 'betamount', sort: 'desc' },
                ],
                defaultState: { sort: null },
            });
            // setTitleFormatted(
            //     'api',
            //     'applyColumnState',
            //     "multiplier: 'asc', betamount: 'desc'"
            // );
        },
        function (api, columnApi) {
            columnApi.applyColumnState({
                defaultState: { sort: null },
            });
            // setTitleFormatted('api', 'applyColumnState', 'clear sort');
        },
    ];
};

const rowData = [
    { "game": "Test Game 1", "user": "Test User 1", "time": "00:00", "betamount": "$1.00", "multiplier": "1.00x", "payout": "$1.00" },
    { "game": "Test Game 2", "user": "Test User 2", "time": "00:01", "betamount": "$2.00", "multiplier": "2.00x", "payout": "$2.00" },
    { "game": "Test Game 3", "user": "Test User 3", "time": "00:02", "betamount": "$3.00", "multiplier": "3.00x", "payout": "$3.00" },
    { "game": "Test Game 4", "user": "Test User 4", "time": "00:03", "betamount": "$4.00", "multiplier": "4.00x", "payout": "$4.00" },
    { "game": "Test Game 5", "user": "Test User 5", "time": "00:04", "betamount": "$5.00", "multiplier": "5.00x", "payout": "$5.00" },
    { "game": "Test Game 6", "user": "Test User 6", "time": "00:05", "betamount": "$6.00", "multiplier": "6.00x", "payout": "$6.00" },
    { "game": "Test Game 7", "user": "Test User 7", "time": "00:05", "betamount": "$7.00", "multiplier": "7.00x", "payout": "$7.00" },
    { "game": "Test Game 8", "user": "Test User 8", "time": "00:05", "betamount": "$8.00", "multiplier": "8.00x", "payout": "$8.00" },
    { "game": "Test Game 9", "user": "Test User 9", "time": "00:05", "betamount": "$9.00", "multiplier": "9.00x", "payout": "$9.00" },
    { "game": "Test Game 10", "user": "Test User 10", "time": "00:05", "betamount": "$10.00", "multiplier": "10.00x", "payout": "$10.00" },
    { "game": "Test Game 11", "user": "Test User 11", "time": "00:05", "betamount": "$11.00", "multiplier": "11.00x", "payout": "$11.00" },
    { "game": "Test Game 12", "user": "Test User 12", "time": "00:05", "betamount": "$12.00", "multiplier": "12.00x", "payout": "$12.00" },
    { "game": "Test Game 13", "user": "Test User 13", "time": "00:05", "betamount": "$13.00", "multiplier": "13.00x", "payout": "$13.00" },
    { "game": "Test Game 14", "user": "Test User 14", "time": "00:05", "betamount": "$14.00", "multiplier": "14.00x", "payout": "$14.00" },
    { "game": "Test Game 15", "user": "Test User 15", "time": "00:05", "betamount": "$15.00", "multiplier": "15.00x", "payout": "$15.00" },
]


const AnimateTable = (params) => {


    const containerStyle = useMemo(() => ({ width: '100%', height: '80vh' }), []);
    const gridStyle = useMemo(() => ({ height: '80vh', width: '100%', color: 'white' }), []);
    // const [rowData, setRowData] = useState();
    // const [columnDefs, setColumnDefs] = useState([
    //     { field: 'game', minWidth: 150 },
    //     { field: 'user', minWidth: 150 },
    //     { field: 'time', minWidth: 120 },
    //     { field: 'betamount', minWidth: 150 },
    //     { field: 'multiplier', minWidth: 150 },
    //     { field: 'payout', minWidth: 150 },
    // ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            sortable: true,
            filter: true,
        };
    }, []);
    const autoGroupColumnDef = useMemo(() => {
        return {
            // to get 'game' showing in the leaf level in this column
            cellRenderer: 'agGroupCellRenderer',
            headerName: 'Game',
            minWidth: 200,
            field: 'game',
        };
    }, []);
    // const onGridReady = useCallback((params) => {
    //     fetch(tableData)
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setRowData(data.slice(0, 50));
    //         });
    // }, []);
    // const valComparator = (val1, val2) => {
    //     const value1 = val1;
    //     const value2 = val2;
    //     if (value1 >= value2) {
    //         return value2 - value1
    //     }
    //     else if (value1 < value2) {
    //         return value1 - value2
    //     }
    // }
    const onGridReady = (params) => {
        // setGridApi(params)
        const columns = Object.keys(rowData[0]).map(key => ({ field: key }),)
        params.api.setColumnDefs(columns)
        StartInterval(params.api, params.columnApi);
    }


    return (
        <>
            <div style={containerStyle}>
                <div className="example-wrapper">
                    <div className="example-header">
                        <div
                        // style={{
                        //     display: 'inline-block',
                        //     height: '10px',
                        //     marginTop: '5px',
                        //     marginRight: '10px',
                        //     width: '100px',
                        //     border: '1px solid grey',
                        // }}
                        >
                            <div
                                id="animationCountdown"
                                className="transition-width"
                                style={{ backgroundColor: 'grey', height: '100%', width: '0%' }}
                            ></div>
                        </div>
                        <span id="animationAction"></span>
                    </div>

                    <div style={gridStyle} className="ag-theme-alpine-dark">
                        <AgGridReact
                            rowData={rowData}
                            defaultColDef={defaultColDef}
                            enableRangeSelection={true}
                            animateRows={true}
                            suppressAggFuncInHeader={true}
                            autoGroupColumnDef={autoGroupColumnDef}
                            onGridReady={onGridReady}
                        ></AgGridReact>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnimateTable