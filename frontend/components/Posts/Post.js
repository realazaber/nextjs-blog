import React from 'react'

function Post(props) {
  return (
    <div>
        Title: {props.title}
        <br/>
        Content: {props.content}
        <br/>
        Slug: {props.slug}
        <br/>
        Published date: {props.date}
        <hr/>
    </div>
  )
}

export default Post