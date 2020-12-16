import React, { useEffect } from 'react';
import WelcomeComponent from '../components/welcome';
import Result from '../components/result';
import { getDataVirusCorona } from '../actions/index';
import { useDispatch } from 'react-redux'

const Covid = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getData = () => {
            dispatch(getDataVirusCorona());
        }
        getData();
    }, []);
    return (
        <>
            <WelcomeComponent />
            <Result />
        </>
    )
}
export default React.memo(Covid);