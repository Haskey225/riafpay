import axios, { AxiosHeaders, HeadersDefaults } from "axios";
export async function getUser() {
    const datas = {
        action: 'find',
        tbl: 'apartement'
    }


    const headers = {
        'Content-Type': 'Application/JSON'
    }

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