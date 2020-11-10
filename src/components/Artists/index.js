import React from 'react'
import useFirestore from '../../hooks/useFirestore';
import Icon1 from '../../images/avatar.svg';
import './index.css';

const Artists = () => {

    const {docs} = useFirestore('artist');


    // artistRef = projectFirestore.collection('artist');

    // userRef = projectFirestore.collection('users');

    // for (let index = 0; index < docs.length; index++) {
    //     const element = docs[index].artistId;
    //     var query = userRef.where('id','==',element)
        
    // }

    return (
        <div className='Container'>
            <h1 className='H1'>Our Artists</h1>
            <div className='Wrapper'>
                {docs && docs.map((doc) => (
                    <div className='Card' key={doc.artistId}>
                        <img className='Avatar' src={Icon1} alt='icon1' />
                        <h2 className='H2'>name</h2>
                        <p className='P'>
                            Specialized in {doc.speciality}. Currently {doc.status}.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Artists
