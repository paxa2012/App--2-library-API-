export const APIlist = (payload, id) => {
    //console.log( popular_list + " " +id);
    return {
        type: 'API_LOAD',
        payload,
        id
    }

}

export const fetchDataPopular = (url, id) => {
    return (dispatch) => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res;
            })
            .then(res => res.json())
            .then(payload_list => {
                if (id === 1) {
                    const payload = [];
                    for (let key in payload_list.rates) {
                        payload.push({ name: key, value: payload_list.rates[key] })
                    }
                    dispatch(APIlist(payload, id))
                }
                else if (id === 2) {
                    dispatch(APIlist(payload_list.results, id))
                }
            })
    }
}