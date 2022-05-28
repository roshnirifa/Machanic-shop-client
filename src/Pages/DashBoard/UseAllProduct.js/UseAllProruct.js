import React from 'react';



const UseAllProruct = ({ tool }) => {
    const { _id, name, img, price, quantity } = tool;

    let deleteTools = (id) => {
        console.log(id);
        fetch(`https://young-springs-64446.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            //     // toast.success('Delete Done');
            //     return alert(' Delete Done ');
            // });
            .then(result => alert(' Delete Done'));
    }

    return (
        <tbody>

            <tr>
                <td>{name}</td>
                <td><img src={img} style={{ width: '80px' }} alt="" /></td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><button onClick={() => deleteTools(_id)} class="btn btn-error">X</button></td>
            </tr>

        </tbody>
    );
};

export default UseAllProruct;