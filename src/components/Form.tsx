import { Button, Col, Container } from "react-bootstrap"

export function FormContact()
{
    return <Col width={9}>

    
    
    <form action="" method="post" role="form" className="email-form p-3 p-md-4">
   
      <div className=" form-group">
        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
      </div>
      <div className="form-group">
        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
      </div>
 
    <div className="form-group">
      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
    </div>
    <div className="form-group">
      <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
    </div>
    <div className="my-3">
      <div className="loading">Loading</div>
      <div className="error-message"></div>
      <div className="sent-message">Your message has been sent. Thank you!</div>
    </div>
    <div className="text-center"><Button type="submit" style={{backgroundColor:'var(--primary-color)', borderColor:'var(--primary-color)'}}>Send Message</Button></div>
  </form>
 </Col>
}