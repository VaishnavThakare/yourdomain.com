
import raim1 from "./raim1.png"
import raim2 from "./raim2.png"
import raim3 from "./raim3.png"
import raim4 from "./raim4.png"
import "./ChooseUs.css"

function ChooseUs() {
  return (
    
<div className="passage3">
  <p className="para1">WHY CHOOSE US</p>
  <p className="para2">WHY WE ARE BEST</p>
  <div  className="Reim-main">

  <div >
    <img className='reimImage' src={raim1} />
  </div>
  <p className='reimPara1'>Clarify vision & Target
   
  </p>
  <p className='reimPara1a'>
      adipisicing elit. 
      obcaecati sint eveniet. Voluptatem, eveniet.
    </p>

  <div >
    <img className='reimImage' src={raim2} />
  </div>
  <p className='reimPara2'>Your Reimbursement Request</p>
  <p className='reimPara2a'>
       adipisicing elit. 
       obcaecati sint eveniet. Voluptatem, eveniet.
    </p>
  <div >
    <img className='reimImage' src={raim3} />
  </div>
  <p className='reimPara3'>New Reimbursement Approval Request</p>
  <p className='reimPara3a'>
      adipisicing elit. 
     obcaecati sint eveniet. Voluptatem, eveniet.
    </p>

  <div className="img4" >
    <img className='reimImage4' src={raim4} />
  </div>
  <p className='reimPara4'>Teams Reimbursement Request</p>
  <p className='reimPara4a'>
    adipisicing elit. 
      obcaecati sint eveniet. Voluptatem, eveniet.
    </p>
{/* 
  <div >
    <img className='reimImage' src={reim3} />
  </div>
  <p className='reimPara3'>Reimbursement Claim Form</p> */}

</div>
</div>
 );
}

export default ChooseUs;

