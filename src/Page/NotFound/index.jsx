import React, { memo, useEffect } from 'react'

function NotFound() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="body_Page">
       
        </div>
    );
}

export default memo(NotFound);