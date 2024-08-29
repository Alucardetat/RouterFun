import React, { useState } from 'react'


// What do we need to make a working blog?
// Need a way to capture a users input onChange <input> or <textarea>
// Need a handler to collect the onChange and store in state
// We need somewhere to hold the new text that was submitted
// useState
// Need state to hold all the blog posts
// Need to map through all the posts to render on screen
// Need a submit button onClick and a handler to update the main blog state with
// new blog or comment



const Blog = () => {

  const [newBlog, setNewBlog] = useState("") // new blog
  const [blogs, setBlogs] = useState([]) // all blogs

  const handleChange = (e) => {
    setNewBlog(e.target.value)
  }

  const handleSubmit = () => {
    setBlogs(prev => {
      return [...prev, newBlog];
    });
    setNewBlog("")
  }

  const handleDelete = (e) => {
    console.log("DELETE HIT", e.target.value)
    let filter = blogs.filter((item) => item !== e.target.id)
    setBlogs(filter)
    console.log('filter', filter)
  }

  return (
    <>

      <div>Blog</div>

      <input onChange={(e) => handleChange(e)} placeholder="what's on your mind?"></input>
      <button onClick={() => handleSubmit()}>Submit</button>

      <div> {blogs.length ? (blogs.map((item) => {
        return (
          <div style={{ border: 'solid violet 1px', margin: '12px', width: '100%' }}>
            <p>{item}</p>
            <button onClick={(e) => handleDelete(e)}>x</button>
              </div>
      )
    })) : (null)}
    </div >
    </>

  )

}

export default Blog