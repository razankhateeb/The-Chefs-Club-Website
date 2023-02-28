import { Container } from "react-bootstrap"
import '../../public/style.css'

export function Maps(){
    return  <Container>
   |<h1 className="title">Get in Touch</h1>
    <div style={{ position: "relative",
        overflow: "hidden",
        width: '100%',
        height:' 0',
        paddingBottom:' 30%', }}><iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4314768557088!2d35.92527595161852!3d31.949189232944395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f9b6d0df885%3A0x5ba66d57515d5d4!2sRainbow%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1677487570344!5m2!1sen!2sjo" 
    height="450" 
    style={{border:"0" , position: "absolute",
    top: '0',
    left: '0',
    width: '100%',
    }}
    allowFullScreen
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

    </iframe></div>
    </Container>
}
