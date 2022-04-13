import React from 'react'

function Video({data}) {
  return (
    <div className="Video">
    <iframe
        width="919"
        height="525"
        src={data.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={data.title}
    />
    <h1>{data.title}</h1>
    <div>
        <span>Created on {data.createdAt}</span> | <span>Number of Views: {data.views}</span>
    </div>
</div>

  )
}

export default Video