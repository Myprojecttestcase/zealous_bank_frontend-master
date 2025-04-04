import axios from 'axios'

export const Loginprocess = async (object) => {
    try {
        const credential = object.accountHoldername + ":" + object.password;
        const token = btoa(credential);

        const temp = await axios.get(`http://localhost:8080/zealousbank/`,
            {
                headers:
                {
                    "Authorization": `Basic ${token}`
                }
            })
        if (temp) {
            sessionStorage.setItem("accountsecurity", object.accountHoldername);
            sessionStorage.setItem("loginuser", token);
        }
    }
    catch (err) {
        alert(err);
    }
}

export const Createaccount = async (object) => {

    const t = await axios.post(`http://localhost:8080/zealousbank/accountcreate`, object);

    return t;
}

export const Findoneuser = async () => {
    const t = await axios.get(`http://127.0.0.1:8080/zealousbank/${sessionStorage.getItem('accountsecurity')}`,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('loginuser')}`
            }
        });

    return t;
}

export const CreateTransaction = async (object) => {
    const t = await axios.post(`http://127.0.0.1:8080/zealousbank/createtransaction`, object,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('loginuser')}`
            }
        }
    );

    return t;
}
