import React from "react";

const Chatuser = ({ user, setChatUser }) => {
  return (
    <div
      onClick={() => setChatUser(user)}
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        marginBottom: "8px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "5px",
      }}
    >
      <img
        src={user.photoURL}
        style={{ width: "45px", height: "45px", borderRadius: "100%" }}
        alt=""
      />
      <div style={{ marginLeft: "4px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "normal" }}>
          {user.displayName}
        </h3>
      </div>
    </div>
  );
};

export default Chatuser;
