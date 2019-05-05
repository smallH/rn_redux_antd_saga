import qs from 'qs';

const fetchRequest = (url='', data={}, type='GET') => {
    let promise;
    return new Promise((resolve, reject)=>{
        if(type.toUpperCase() === 'GET'){
            let paramsArray = [];
            Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]));
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
            promise = fetch(url,{method: type});
        }else if(type.toUpperCase() === 'POST' || type.toUpperCase() === 'DELETE' || type.toUpperCase() === 'PUT' || type.toUpperCase() === 'PATCH'){
            promise = fetch(url, {
                method: type,
                body: qs.stringify({...data}),
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                    'Accept': 'application/json'
                }
            });
        }

        promise.then((response)=>{
            if(response.status >= 200 && response.status < 300) {
                resolve(response.json());
            }else{
                reject(response);
            }
        }).catch((error)=>{
            reject(error);
        });
    });
};

export default fetchRequest;