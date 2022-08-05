import React from 'react'
import LazyLoader from './LazyLoader'

export default function Thumbnail({ src }) {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            {/* <LazyLoader src={src} height={'80%'} threshold={[0, 0.5, 1]} /> */}
            <img src={src} height={'80%'} alt="" />
        </div>
    )
}