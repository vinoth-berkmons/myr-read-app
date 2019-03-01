import {useState, useEffect} from 'react';

const customUseFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if(response.length > 0){
                    const data = await response.json();
                    setData(data);
                    setLoading(false);
                } else {
                    setError(new Error("Not able to fetch the data"));
                }
            } catch(e) {
                setError(e)
            }
            setLoading(true);
        })();
    },[url]);

    return {error, loading, data};
};

export default customUseFetch;