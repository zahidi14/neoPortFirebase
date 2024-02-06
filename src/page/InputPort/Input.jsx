import React, { useEffect, useState } from "react";
import "./input.scss";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormLabel,
  InputGroup,
  ProgressBar,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Input = () => {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [imgurl, setImg] = useState("");
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("");
  const [progres, setprogres] = useState(0);
  const [selected, setSelected] = useState([]);

  const titl = (e) => setTitle(e.target.value);

  const descr = (e) => setDesc(e.target.value);
  const linkk = (e) => setLink(e.target.value);
  const platf = (e) => setPlatform(e.target.value);

  useEffect(() => {
    file && upload();
  }, [file]);

  const toastSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const toasterr = (msg) => {
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await addDoc(collection(db, "port"), {
      title: title,
      langugae: selected,
      desc: desc,
      image: imgurl,
      platform: platform,

      timestamp: serverTimestamp(),
    });
    toastSuccess("success" + res.id);
    setTitle("");
    setSelected([]);
    setDesc("");
    setFile("");
    setLink("");
    setImg("");
    setprogres(0);
  };

  const upload = () => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogres(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
        });
      }
    );
  };
  const radio = [
    "HTML",
    "SCSS",
    "Javascript",
    "React",
    "Mongo DB",
    "Express JS",
    "Node JS",
    "Python",
    "PHP",
    "Wordpress",
    "Laravel",
    "Ajax",
    "Jquery",
  ];

  const handleCheckbox = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };
  console.log({ check: selected });

  console.log("dd", file);
  return (
    <Container>
      <div className="p-4 text-dark">
        {" "}
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={titl} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Link</Form.Label>
            <Form.Control type="text" value={link} onChange={linkk} />
          </Form.Group>
          <FormGroup>
            <FormLabel>Language: </FormLabel>
            {radio.map((option) => (
              <div key={option} className="mb3">
                <Form.Check
                  key={option}
                  id={option}
                  type="checkbox"
                  label={option}
                  checked={selected.includes(option)}
                  onChange={() => handleCheckbox(option)}
                />
              </div>
            ))}
            <div>
              {" "}
              <strong>Selected : </strong> {selected.join(", ")}{" "}
            </div>
          </FormGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>
          <ProgressBar now={progres} label={`${progres}%`} />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={descr}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="outline-primary"
            disabled={progres === 100 ? false : true}
          >
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Input;
