import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cYTihODeLNTSImny5ABxWFHWZZ2D6PxD6JjdH8lCvLty9NQ__uQblYqMsRw8V-SWpt8&usqp=CAU"
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>message</p>
      </div>
    </div>
  );
};

export default Chat;
