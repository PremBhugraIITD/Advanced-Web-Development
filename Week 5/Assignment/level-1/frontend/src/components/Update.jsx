import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Update = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    description: "",
    interests: ["", "", ""],
    buttons: [
      {
        title: "",
        url: "",
      },
      {
        title: "",
        url: "",
      },
    ],
  });

  useEffect(() => {
    fetch("http://localhost:3000/cards/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetails(data.message);
      });
  }, []);

  const handleChange = (event) => {
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handArrayChange = (event, index) => {
    setDetails((prevValue) => {
      const newArray = prevValue.interests;
      newArray[index] = event.target.value;
      return {
        ...prevValue,
        interests: newArray,
      };
    });
  };

  const handleSocialChange = (event, index) => {
    setDetails((prevValue) => {
      const newArray = prevValue.buttons;
      newArray[index][event.target.name] = event.target.value;
      return {
        ...prevValue,
        buttons: newArray,
      };
    });
  };

  const handleClick = () => {
    fetch("http://localhost:3000/cards/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        alert("Details updated");
        props.refresh();
        navigate("/");
      });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        value={details.name}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="description"
        placeholder="Description"
        value={details.description}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        placeholder="Interest 1"
        value={details.interests[0]}
        onChange={(event) => {
          handArrayChange(event, 0);
        }}
      />
      <br />
      <input
        placeholder="Interest 2"
        value={details.interests[1]}
        onChange={(event) => {
          handArrayChange(event, 1);
        }}
      />
      <br />
      <input
        placeholder="Interest 3"
        value={details.interests[2]}
        onChange={(event) => {
          handArrayChange(event, 2);
        }}
      />
      <br />
      <br />
      <input
        name="title"
        placeholder="Social 1 Title"
        value={details.buttons[0].title}
        onChange={(event) => {
          handleSocialChange(event, 0);
        }}
      />
      <input
        name="url"
        placeholder="Social 1 URL"
        value={details.buttons[0].url}
        onChange={(event) => {
          handleSocialChange(event, 0);
        }}
      />
      <br />
      <input
        name="title"
        placeholder="Social 2 Title"
        value={details.buttons[1].title}
        onChange={(event) => {
          handleSocialChange(event, 1);
        }}
      />
      <input
        name="url"
        placeholder="Social 2 URL"
        value={details.buttons[1].url}
        onChange={(event) => {
          handleSocialChange(event, 1);
        }}
      />
      <br />
      <br />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};
