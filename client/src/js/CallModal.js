import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


function CallModal({ status, callFrom, startCall, rejectCall }) {
  const acceptWithVideo = (video) => {
    const config = { audio: true, video };
    return () => startCall(false, callFrom, config);
  };
  
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  if(status=="active"){
   
     
      audio.loop=true;
      audio.play();
      console.log(status)
      
      document.querySelector(".hangup").addEventListener("click",()=>{
        audio.pause()
      });
      document.querySelector(".phone").addEventListener("click",()=>{
        audio.pause()
      });
      document.querySelector(".camera").addEventListener("click",()=>{
        audio.pause()
      });
    
  }

  return (
    <div className={classnames('call-modal', status)}>
      <p>
        <span className="caller">{`${callFrom} is calling`}</span>
      </p>
      <button
        type="button"
        className="btn-action camera fa fa-video-camera"
        onClick={acceptWithVideo(true)}
      />
      <button
        type="button"
        className="btn-action phone fa fa-phone"
        onClick={acceptWithVideo(false)}
      />
      <button
        type="button"
        className="btn-action hangup fa fa-phone"
        onClick={rejectCall}
      />
    </div>
  );
}

CallModal.propTypes = {
  status: PropTypes.string.isRequired,
  callFrom: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
  rejectCall: PropTypes.func.isRequired
};

export default CallModal;
