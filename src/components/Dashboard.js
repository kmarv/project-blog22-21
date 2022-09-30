import React, { useState } from "react";

import "../assets/css/style.css";

import { Avatar, Divider } from "antd";
import { GithubFilled } from "@ant-design/icons";
import { Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import RecordH from "../assets/JSON/henry.json";
import RecordV from "../assets/JSON/viola.json";
import RecordC from "../assets/JSON/collin.json";
import RecordM from "../assets/JSON/marvin.json";
import RecordH2 from "../assets/JSON/h2.json";
import RecordM2 from "../assets/JSON/m2.json";
import RecordV2 from "../assets/JSON/v2.json";
import RecordC2 from "../assets/JSON/c2.json";

function Dashboard() {
  const [showV, setShowV] = useState(false);
  const [showC, setShowC] = useState(false);
  const [showH, setShowH] = useState(false);
  const [show, setShow] = useState(false);

  const [fullscreen, setFullscreen] = useState(true);

  function handleShowV(breakpoint) {
    setFullscreen(breakpoint);
    setShowV(true);
  }

  function handleShowC(breakpoint) {
    setFullscreen(breakpoint);
    setShowC(true);
  }

  function handleShowH(breakpoint) {
    setFullscreen(breakpoint);
    setShowH(true);
  }

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <body id="page-top">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            BSE22-21 Project
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/postreg">
                  Post
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <a
                  className=" btn btn-primary"
                  onClick={logout}
                  href="#contact"
                >
                  Logout
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold"> Blog </h1>
              <h1 className="text-white font-weight-bold">
                Malaria Parasite Detection Artificial Intelligence{" "}
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                We are team of students in out final year at Makerere University
                Undertaking a final Year Project
              </p>
              <a className="btn btn-primary btn-xl" href="#project">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* About */}
      <section className="page-section bg-primary" id="project">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">
                Project: Malaria Parasite Detection Using Image Processing And
                Machine learning
              </h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                We are team of 4 students in out final year at Makerere
                University Undertaking a final Project looking to achieve a
                degree in software engineering
              </p>
              <h2 className="text-white ">Project Description</h2>
              <p className="text-white-75 mb-4">
                Our project is an Artificially Intelligent system that will help
                doctors and lab technicians in detecting malaria parasites in
                blood samples taken from blood streams of patients through the
                use of image processing amd machine learning algorithms.{" "}
              </p>
              <p className="text-white-75 mb-4">
                The idea is to build a model that can detect cells from images
                of multiple cells in thin blood smear on standard microscope
                slides and classify them as either infected or uninfected with
                early and effective testing using image processing{" "}
              </p>
              <h2 className="text-white ">Project Aims & Goals</h2>
              <p className="text-white-75 mb-4">
                {" "}
                Aim to provide a faster, low cost, and reliable alternative to
                microscopic detection of Malaria
              </p>
              <p className="text-white-75 mb-4">
                {" "}
                Aim to provide an automated process for detecting malaria
                parasites
              </p>
              <p className="text-white-75 mb-4">
                {" "}
                Aim to reduce the time spent by lab technicians when checking
                blood samples for malaria parasites
              </p>
              <p className="text-white-75 mb-4">
                Aim to make use of technologies like AI to further better
                medical services in our country
              </p>
              <a className="btn btn-light btn-xl" href="#team">
                View Team
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Team--> */}
      <section className="page-section" id="team">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">Development Team</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <Avatar size={164} icon={<GithubFilled />} />
                </div>
                <h3 className="h4 mb-2">Kaaya Marvin</h3>
                <p className="text-muted mb-0">
                  Senior Developer/Software engineer
                </p>
                <br></br>
                <Button type="primary" onClick={() => handleShow(true)}>
                  View Activities
                </Button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <Avatar size={164} icon={<GithubFilled />} />
                </div>
                <h3 className="h4 mb-2">Mukwatse Collin</h3>
                <p className="text-muted mb-0">
                  Software Developer Backend / Software Engineer
                </p>
                <br></br>
                <Button type="primary" onClick={() => handleShowC(true)}>
                  View Activities
                </Button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <Avatar size={164} icon={<GithubFilled size={64} />} />
                </div>
                <h3 className="h4 mb-2">Nakayenga Viola</h3>
                <p className="text-muted mb-0">
                  Document Analyst And Requirements Engineer / Software Engineer
                </p>
                <br></br>
                <Button type="primary" onClick={() => handleShowV(true)}>
                  View Activities
                </Button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <Avatar size={164} icon={<GithubFilled />} />
                </div>
                <h3 className="h4 mb-2">Miiro Henry</h3>
                <p className="text-muted mb-0">
                  Frontend Devloper / Software Engineer
                </p>
                <br></br>
                <Button type="primary" onClick={() => handleShowH(true)}>
                  View Activities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        <>
          <Modal
            show={showH}
            fullscreen={fullscreen}
            onHide={() => setShowH(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Individual Activities
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex" }}>
              <div className="row">
                <div className="col-md-6">
                  <h2>Semester 1</h2>
                  {RecordH &&
                    RecordH.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description"]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h2>Semester 2</h2>

                  {RecordH2 &&
                    RecordH2.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description"]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      }

      {
        <>
          <Modal
            show={showV}
            fullscreen={fullscreen}
            onHide={() => setShowV(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Individual Activities
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex" }}>
              <div className=" row">
                <div className="col-md-6">
                  <h2>Semester 1</h2>
                  {RecordV &&
                    RecordV.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description "]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
              <div className=" row">
                <div className="col-md-6">
                  <h2>Semester 2</h2>
                  {RecordV2 &&
                    RecordV2.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description "]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      }
      {
        <>
          <Modal
            show={showC}
            fullscreen={fullscreen}
            onHide={() => setShowC(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Individual Activities
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex" }}>
              <div className="row">
                <div className="col-md-6">
                  <h2>Semester 1</h2>
                  {RecordC &&
                    RecordC.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description "]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h2>Semester 2</h2>
                  {RecordC2 &&
                    RecordC2.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description "]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      }
      {
        <>
          <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Individual Activities
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ display: "flex" }}>
              <div className="row">
                <div className="col-md-6">
                  <h2>Semester 1</h2>
                  {RecordM &&
                    RecordM.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description "]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h2>Semester 2</h2>
                  {RecordM2 &&
                    RecordM2.map((rec) => {
                      return (
                        <Card
                          bg={"Primary".toLowerCase()}
                          text={
                            "Primary".toLowerCase() === "light"
                              ? "dark"
                              : "white"
                          }
                          style={{
                            width: "23rem",
                            margin: "5px",
                            height: "fit-content",
                          }}
                          className="mb-2"
                          key={rec.id}
                        >
                          <Card.Header>Task</Card.Header>
                          <Card.Body>
                            <Card.Title>{rec.activity}</Card.Title>

                            <Card.Text>{rec["description "]}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      }
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            <b>Created By Kaaya Marvin</b>
          </div>
          <div className="small text-center text-muted">
            Copyright &copy; 2022 - Marvinco
          </div>
        </div>
      </footer>
    </body>
  );
}
export default Dashboard;
