import React from 'react'

function Contact() {
  return (
    <div style ={{paddingTop:"6rem"}}>
      <h1 style ={{textAlign:"center"}}>Let's Get In Touch!</h1>
      <form className ="container">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  placeholder="Password"/>
  </div>
  <textarea id="w3review" name="w3review" rows="4" cols="50">
write your comment here!
</textarea>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contact
