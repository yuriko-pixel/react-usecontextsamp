import React, { useContext } from 'react'
import { UserContext, HobbyContext } from './App';

const ContextA = () => {
    const user = useContext(UserContext);
    const hobby = useContext(HobbyContext);
    return (
        <p>{user.name}{user.age}歳、趣味は{hobby}です</p>
    )
}

export default ContextA