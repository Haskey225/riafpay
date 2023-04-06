export async function getUser() {
    // const datas = {
    //     action: 'find',
    //     tbl: 'apartement'
    // }


    // const headers = {
    //     'Content-Type': 'Application/JSON'
    // }

    // let respon = await fetch('http://localhost/haskeyRest/data/', {
    //     method: "POST", // POST, PUT, DELETE, etc.
    //     headers: {
    //         // the content type header value is usually auto-set
    //         // depending on the request body
    //         //   "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         action: 'find',
    //         tbl: 'apartement'
    //     }), // string, FormData, Blob, BufferSource, or URLSearchParams
    //     referrer: "about:client", // or "" to send no Referer header,
    //     // or an url from the current origin
    //     referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
    //     // mode: "cors", // same-origin, no-cors
    //     // credentials: "same-origin", // omit, include
    //     cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
    //     redirect: "follow", // manual, error
    //     integrity: "", // a hash, like "sha256-abcdef1234567890"
    //     keepalive: true, // true
    // });
    // const data = await respon.json();
    // console.log(data);


    // console.log(respon.json());
    // const header = new AxiosHeaders();
    // const res = await axios.post('http://localhost/haskeyRest/data/', datas, header)
}

export async function getApart() {

    console.log('Fetching data ...');
    const respo = await fetch(`http://localhost/haskeyRest/data/?action=find&tbl=apartement&col[]=*`);
    console.log('Parse data to JSON ...');
    const data = await respo.json();
    // console.log(data['0'].occupant);
    return data;
}

export const getRemoteMarchant = async (wallet) => {
    const cond = {
        wallet:wallet
    }
    const request = `/?action=find&tbl=marchant&${cond}`;
    console.log('Getting Data ...')
    const respo = await fetch(`http://localhost/haskeyRest/data${request}`);
    console.log('Fetching datas')
    const val = await respo.json();
    console.log('Display datas')
    console.log(val.marchant_id);
    // return val;
}
export const getPostRemoteMarchant = async (wallet) => {
    const cond = {
        wallet: wallet
    };
    let datas = {
        'action': 'find',
        'tbl': 'marchant'
    }
    // const request = `/?action=find&tbl=marchant&${cond}`;
    console.log('Getting Data ...')
    const respo = await fetch(`http://localhost/haskeyRest/api/`,{
        method: 'POST',
        headers:{

        },
        body: JSON.stringify(datas),
        mode: 'no-cors'
    });
    console.log('Fetching datas');
    const val = await respo.json();
    console.log('Display datas');
    console.log(val);
    // return val;
}

export const getParameters = () => {

    // Address of the current window
    const address = window.location.search

    // Returns a URLSearchParams object instance
    const parameterList = new URLSearchParams(address)

    // Created a map which holds key value pairs
    let map = new Map()

    // Storing every key value pair in the map
    parameterList.forEach((value, key) => {
        map.set(key, value)
    })

    // Returning the map of GET parameters
    return map
}
export const getMarchantName = () => {

    const address = window.location.search

    const parameterList = new URLSearchParams(address)

    let map = new Map()

    parameterList.forEach((value, key) => {
        map.set(key, value)
    })
    let marchant_id =  '';
    parameterList.forEach((val, key) => {
        marchant_id = val;
    })

    // Returning the map of GET parameters
    // return map
    return marchant_id;
}


export const getVerified = () => {
    let marchantName = '';

    // Address of the current window
    const address = window.location.search

    // Returns a URLSearchParams object instance
    const parameterList = new URLSearchParams(address)

    // Created a map which holds key value pairs
    let map = new Map()

    // Storing every key value pair in the map
    parameterList.forEach((value, key) => {
        map.set(key, value)
    })

    // Returning the map of GET parameters
    // return map
    return parameterList;
}