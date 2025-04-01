import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { CreateTransaction, Findoneuser } from './Connect'

export const Transactionform = () => {

    const [newtransation, setNewtransation] = useState({
        "transactionNumber": 0,
        "transactionType": "",
        "currentBalance": "0.0",
        "transactionAmount": 0,
        "transactionHolderNumber": 0,
        "transactionDate": "",
        "account": {}
    })

    const [account, setAccount] = useState({
        "accountNumber": 0,
        "accountHoldername": "",
        "accountIfsccode": "",
        "accountBalance": 0.0,
        "accountHoldercontactno": 0,
        "accountHolderplace": "",
        "password": ""
    })

    const setaccount = async () => {
        const t = await Findoneuser();
        newtransation.account = t.data;
    }
    useEffect(() => {
        setaccount();
    })


    const getinputvalues = (myvalues) => {
        const { name, value } = myvalues.target;
        setNewtransation((temp) => {
            return {
                ...temp,
                [name]: value,
            }
        })
    }
    return (
        <>
            <div className="container-fluid mt-2 ">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 ">
                        <h1 className="text-primary text-uppercase fw-bolder text-center ">
                            <br></br>CREARE NEW TRANSACTION</h1>
                        <p className='text-center fw-bold'>Complete your transaction by grow adding and minus your acoount balance</p>
                        <div className='container'>
                            <div className="form group mt-3">
                                <label>TRANSACTION NUMBER</label>
                                <input type="number"
                                    name="transactionNumber"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={newtransation.transactionNumber}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>TRANSACTION TYPE</label>
                                <select name="transactionType"
                                    className="form-select mt-1"
                                    onChange={getinputvalues}
                                    value={newtransation.transactionType}>
                                    <option selected hidden>SELECT YOUR TYPE</option>
                                    <option>CREDIT</option>
                                    <option>DEBIT</option>
                                </select>
                            </div>
                            <div className="form group mt-3">
                                <label>TRANSACTION AMOUNT</label>
                                <input type="number"
                                    name="transactionAmount"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={newtransation.transactionAmount}
                                />
                            </div>
                            <div className="form group mt-3">
                                <label>TRANSACTIONHOLDER NUMBER</label>
                                <input type="text"
                                    name="transactionHolderNumber"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={newtransation.transactionHolderNumber}
                                />
                            </div>
                            <div className="form group mt-3">
                                <label>ACCOUNT BALANCE</label>
                                <input type="text"
                                    name="currentBalance"
                                    placeholder="0.0"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={newtransation.currentBalance}
                                />
                            </div>
                            <div className="form group mt-3">
                                <label>TRANSACTION DATE</label>
                                <input type="date"
                                    name="transactionDate"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={newtransation.transactionDate}
                                />
                            </div>
                            <div className="row justify-content-around mt-4">
                                <button className="btn btn-success col-3 ms-3"
                                    onClick={
                                        async () => {
                                            const t = await CreateTransaction(newtransation);
                                            window.location.assign("/");
                                        }
                                    } >SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}