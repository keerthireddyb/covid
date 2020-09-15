
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, UncontrolledTooltip } from 'reactstrap';

const CovidComponent = (props) => {
  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const COVID19ModalText ="<p>For your safety, and the safety of your community and healthcare providers we want to direct you to the best method of care.</p><p>Help us provide you with the right care in the right way by scheduling a video visit if any of the below apply to you.</p><ul class='angle-bullets'><li>In the last 14 days, I have tested positive for COVID-19 (coronavirus).</li><li>I am awaiting COVID-19 test results.</li><li>In the last 14 days, I have been in <span id='contact' class='tooltip-link'>close contact</span> with someone who was confirmed or suspected to have COVID-19.</li><li>I have one or more <span id='symptoms' class='tooltip-link'>symptoms</span> of COVID-19.</li></ul><p class='footer'>Video visits can be scheduled via self-service in the Find Care section or by calling your clinic.</p><hr/><p class='footer'>I have read the above and agree to schedule a video visit if any of those items apply to me.</p>";
  const COVID19ModalButtonText="CONTINUE";
  const COVID19ModalHeaderText="We’re in this together!";
  const COVID19ModalToolTips ="symptoms^<p class='heading'>COVID-19 SYMPTOMS</p><div class='symptoms-main'><div class='left'><ul class='angle-bullets'><li>Chills</li><li>Sore throat</li><li>Cough</li><li>Loss of smell</li><li>Loss of taste</li> <li>Vomiting</li> </ul></div><div class='right'><ul class='angle-bullets'><li>Diarrhea</li><li>Severe headache</li><li>Fever</li><li>Muscle pain</li><li>Shortness of breath</li> <li>Congestion or Runny nose</li> </ul></div></div>~contact^<p class='heading'>WHAT IS CLOSE CONTACT?</p><p>Close contact is being within approximately six feet of a person for over 15 minutes.</p>";

  const COVID19ModalToolTipsData={};
  if(COVID19ModalToolTips)
  {
      const tooltipData=COVID19ModalToolTips.split('~');
      tooltipData.map(item=>{
        const [tooltipDataKey,tooltipDatainfo]=item.split('^');
        if(tooltipDataKey && tooltipDatainfo){
          COVID19ModalToolTipsData[tooltipDataKey]=tooltipDatainfo;
        }
      })
  } 
  const Tooltips=COVID19ModalToolTipsData && Object.keys(COVID19ModalToolTipsData) && Object.keys(COVID19ModalToolTipsData).map(key=>(
    <UncontrolledTooltip placement="top" autohide={false} key={key} target={key} className={`${key}-covid-tooltip`}>
         <div dangerouslySetInnerHTML={{ __html: COVID19ModalToolTipsData[key] }} className={`${key}-tooltip`}></div>
      </UncontrolledTooltip>
  ));
 return (
    <div>
      <Button className="covid-button" onClick={toggle}>CovidInstructions</Button>
      
      <Modal isOpen={modal} toggle={toggle} className="Covid-Modal">
        <ModalHeader>
          <div className="row covid-header">
            <div className="col12">
                  {COVID19ModalHeaderText}
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col12">
              <div dangerouslySetInnerHTML={{ __html: COVID19ModalText }}></div>
                <div className="text-center">
                  {COVID19ModalButtonText && <Button className="covid-continue-button" onClick={toggle}>{COVID19ModalButtonText}</Button>}
                </div>
            </div>
          </div>
          {Tooltips}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CovidComponent;