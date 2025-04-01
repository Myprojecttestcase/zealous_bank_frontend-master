import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Loginprocess } from './Connect';
import { Accountform } from './CreateAccount';


export const Loginpage = () => {

    const [createpage, setCreatepage] = useState(false);
    const [loginuser, setLoginuser] = useState({
        "accountHoldername": "",
        "password": ""
    })
    const getinputvalues = (myvalues) => {
        const { name, value } = myvalues.target;
        setLoginuser((temp) => {
            return {
                ...temp,
                [name]: value,
            }
        })
    }

    const open = async () => {
        // alert(JSON.stringify(loginuser));
        await Loginprocess(loginuser)
        window.location.assign("/")
    }

    return (
        <>
            {
                (createpage) ?
                    <>
                        <Accountform />
                    </>
                    :
                    <>
                        <div className='row justify-content-center mt-5'>
                            <div className='col-5'>
                                <div className='card'>
                                    <h4 className='text-center mt-5 text-decoration-underline text-primary'> WELCOME TO ZEALOUS BANK</h4>
                                    <div className='form-group mx-4 my-2'>
                                        <label className='form-label'>CLIENT NUMBER</label>
                                        <input className='form-control'
                                            type='text'
                                            name="accountHoldername"
                                            placeholder='User id (ACCNO)'
                                            onChange={getinputvalues}
                                            value={loginuser.accountHoldername} />
                                    </div>
                                    <div className='form-group mx-4 my-2'>
                                        <label className='form-label'>PASSWORD</label>
                                        <input className='form-control'
                                            type='password'
                                            name="password"
                                            placeholder='ADMIN PASSWORD'
                                            onChange={getinputvalues}
                                            value={loginuser.password} />
                                    </div>
                                    <div className='row justify-content-center mt-3 mb-1'>
                                        <button className='btn btn-outline-primary col-5 '
                                            onClick={open}>
                                            LOGIN
                                        </button>
                                    </div>
                                    <div class="d-flex justify-content-around align-items-center mb-1 mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                                        </div>
                                        <a
                                            onClick={() => {
                                                setCreatepage(true);
                                            }
                                            }>NEW USER</a>
                                    </div>
                                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!"><i class="bi bi-facebook  "></i></a>
                                        <a href="#!"><i class="bi bi-whatsapp ms-5"></i></a>
                                        <a href="#!"><i class="bi bi-github ms-5"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}