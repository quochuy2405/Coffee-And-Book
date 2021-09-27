import React, { useEffect } from 'react';

NotFound.propTypes = {
    
};

function NotFound(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <p>NotFound</p>
        </div>
    );
}

export default NotFound;