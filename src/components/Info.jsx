import { useState } from "react";

function Info() {

  const [isDataShowing, setIsDataShowing] = useState(false)

  const user = {
    username: "Bob",
    age: 22,
    course: "Web Development",
    isEnrolled: false,
    hasCertificate: false
  };

  const handleToggleData = () => {
    setIsDataShowing(!isDataShowing)
  }

  return (
    <div>
      <h1>Data</h1>


      <button onClick={handleToggleData}>Toggle Info</button>

      {isDataShowing ? (       
          <div>
            <p>Name: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>Course: {user.course}</p>

            <hr />

            { user.isEnrolled ? (<p>Currently Enrolled</p>) : (<p>Not Enrolled</p>) }

            {/* { user.hasCertificate ? (<p>Certificate Available</p>) : null } */}

            { user.hasCertificate && (<p>Certificate Available</p>) }
            

          </div>
        ) : null }

    </div>
  );
}

export default Info;
