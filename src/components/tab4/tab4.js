

import { Button } from "reactstrap"
import imagem2 from "./imagem2.png"


export default function Tab4() {
    return (
        <>
          <h1>Prints screens of the project Medical Recorder (PE)</h1>
          <Button className='mb-2 mt-2' href="https://github.com/hugolpa/medical_record" target="_blank"> See on GitHub</Button>
          <img src={imagem2} className='img-fluid shadow-4' alt='...' />
          
        </>
    )
}