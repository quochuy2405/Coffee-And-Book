import React, { useEffect } from 'react';
import Header from '../../components/Header';

BillSeach.propTypes = {
    
};

function BillSeach(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           <Header/>
        </div>
    );
}

export default BillSeach;