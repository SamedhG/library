const BASE_URL = "http://localhost:3000"


export async function api_post(path, data) {
    let opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: data}),
    };
    let text = await fetch(BASE_URL + path, opts);
    return await text.json();
}

export async function api_get(path) {
    let text = await fetch( BASE_URL + path, {});
    let resp = await text.json();
    return resp;
}

export async function api_patch(path, data) {
    let opts = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: data}),
    };
    let text = await fetch(BASE_URL + path, opts);
    return await text.json();
}

export async function api_delete(path) {
    let text = await fetch( BASE_URL + path, { method: 'DELETE' });
    let resp = await text.json();
    return resp;
}


