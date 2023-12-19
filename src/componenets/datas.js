import React from 'react'
import { RiEditBoxFill } from "react-icons/ri";
import { RiDeleteBin3Fill } from "react-icons/ri";
const Datas = ({ name, id, setUpdateContent, setShowDropdown, deleteItem }) => {


    const deleteDt = () => {
        deleteItem(id);
    }

    const updateData = () => {
        setUpdateContent({ name, id });
        setShowDropdown(true);

    }

    return (
        <div className='dataTo btn btn-outline-light'>
            {name}
            <div className='icons'>
                <RiEditBoxFill className='icon' onClick={updateData} />
                <RiDeleteBin3Fill className='icon' onClick={deleteDt} />
            </div>
        </div>
    )
}

export default Datas



