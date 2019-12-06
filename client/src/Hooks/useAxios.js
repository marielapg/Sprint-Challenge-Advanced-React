import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = url => {
    const [data, setData] = useState([])

    useEffect(()=> {
        axios
            .get(url)
            .then(results => {
                setData(results.data)
            })
            .catch(error=> {
                console.log(error)
            })
    },[url])
    return [data]
}

export default useAxios
