import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Findoneuser } from './Connect'
import { useEffect, useState } from 'react'

export const Viewaccountdetails = () => {
    const [account, setAccount] = useState({
        "accountNumber": 0,
        "accountHoldername": "",
        "accountIfsccode": "",
        "accountBalance": 0.0,
        "accountHoldercontactno": 0,
        "accountHolderplace": "",
        "password": ""
    })
    useEffect(() => {
        setvalues();
    }, [])

    const setvalues = async () => {
        const t = await Findoneuser();
        setAccount(t.data);
    }

    return (
        <>
            <div class="row align-items-center container-fluid">
                <div class="col-2 ">
                    ACCOUNT NUMBER <i class="bi bi-list-ol"></i>
                    <hr />
                    <h6>{account.accountNumber}</h6>
                </div>
                <div class="col-2">
                    HOLDER NAME <i class="bi bi-person-fill-lock"></i>
                    <hr />
                    <h6>{account.accountHoldername}</h6>
                </div>
                <div class="col-2">
                    BANK IFSC CODE <i class="bi bi-box2-heart"></i>
                    <hr />
                    <h6>{account.accountIfsccode}</h6>
                </div>
                <div class="col-2">
                    ACCOUNT BALANCE <i class="bi bi-cash-coin"></i>
                    <hr />
                    <h6>{account.accountBalance}</h6>
                </div>
                <div class="col-2">
                    CONTACT NO <i class="bi bi-person-lines-fill"></i>
                    <hr />
                    <h6>{account.accountHoldercontactno}</h6>
                </div>
                <div class="col-2">
                    BANK ADDRESS <i class="bi bi-house-add"></i>
                    <hr />
                    <h6>{account.accountHolderplace}</h6>
                </div>
            </div>
        </>
    );
}