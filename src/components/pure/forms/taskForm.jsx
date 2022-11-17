import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/enum/level.enum.model";
import { Task } from "../../../models/model/task.class.model";

const TaskForm = ({ addTask, tLength }) => {
    const nameRef = useRef("");
    const descRef = useRef("");
    const levelRef = useRef(LEVELS.normal);

    function add(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descRef.current.value,
            false,
            levelRef.current.value
        );
        addTask(newTask);
    }
    const normalStyle = {
        color: "#0D6EFD",
        fontWeight: "bold",
    };
    const urgentStyle = {
        color: "#FFC107",
        fontWeight: "bold",
    };
    const importantStyle = {
        color: "#DC3545",
        fontWeight: "bold",
    };
    return (
        <Container className="mb-3">
            <Form
                onSubmit={add}
                className="d-md-flex flex-column align-items-strech"
            >
                <Form.Group className="mb-3">
                    <Form.Label className="mb-0">Task Title</Form.Label>
                    <Form.Control
                        required
                        ref={nameRef}
                        type="text"
                        placeholder="enter your new task"
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="mb-0">Task Description</Form.Label>
                    <Form.Control
                        required
                        ref={descRef}
                        as="textarea"
                        placeholder="enter your new task"
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="mb-0">Priority</Form.Label>
                    <Form.Select required ref={levelRef}>
                        <option disabled>Select your task priority</option>
                        <option value={LEVELS.normal} style={normalStyle}>
                            Normal
                        </option>
                        <option value={LEVELS.urgent} style={urgentStyle}>
                            Urgnet
                        </option>
                        <option value={LEVELS.important} style={importantStyle}>
                            Important
                        </option>
                    </Form.Select>
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    {tLength ? "Add Task" : "Create yout First Task"}
                </Button>
            </Form>
        </Container>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    tLength: PropTypes.number.isRequired,
};
export default TaskForm;
