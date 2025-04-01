import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import { Findoneuser } from './Connect';


export const AllTransactions = () => {

    return (
        <>
            <div className="container mt-2" >
                <div className="row justify-content-center">
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table table-striped table-primary">
                            <thead id="texting">
                                <tr>
                                    <th>TRANSACTION NO</th>
                                    <th>TRANSACTION TYPE</th>
                                    <th>CURRENT BALANCE</th>
                                    <th>TRANSACTION AMOUNT</th>
                                    <th>TRANSACTIONHOLDER A/CNUMBER</th>
                                    <th>TRASANCTION DATE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}