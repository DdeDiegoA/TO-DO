import React, { useState, useEffect } from "react";
import { Card, Container, Spinner, Table } from "react-bootstrap";
// import { LEVELS } from "../../models/enum/level.enum.model";
// import { Task } from "../../models/model/task.class.model";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/taskComponent";
import "../../styles/tasklist.scss";

const TaskList = () => {
    //? cuando se dedclare este componente, se ejecutará
    //*  Creating a new instance of the Task class.

    const defaultTask = [];

    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("task_list state has been modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("taskList component is going to unmount");
        };
    }, [tasks]);

    /**
     * *When the user clicks on a task, the task's completed property is toggled to the opposite of what
     *  it was before.
     */
    const completeTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //* we upted the state of the component and it will update
        //* iteration of the task in order to show the task
        setTasks(tempTask);
    };

    /**
     *  Delete a task from the list of tasks.
     */
    const deleteTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    };

    const addTask = (task) => {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    };

    const TableContent = () => {
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                deleteTask={deleteTask}
                            ></TaskComponent>
                        );
                    })}
                </tbody>
            </Table>
        );
    };

    const NoTask = () => {
        return (
            <div>
                <h3 className="fs-2">There are no task to show</h3>
                <h4 className="fs-3">please, create one</h4>
            </div>
        );
    };

    let hasTask = "";

    if (tasks.length) {
        hasTask = <TableContent />;
    } else {
        hasTask = <NoTask />;
    }

    /**
     * *Returning the JSX code that will be rendered in the browser.
     */
    return (
        <Container className="d-flex align-items-center elContenedor">
            <TaskForm addTask={addTask} tLength={tasks.length}></TaskForm>
            <Container className="contenedorlist">
                <Card fluid="md" className="cardTask">
                    <Card.Header>
                        <h4>YOUR TASKS</h4>
                    </Card.Header>
                    <Card.Body>
                        {loading ? (
                            <div>
                                <Spinner animation="border" variant="primary" />
                                <p>Loading Tasks...</p>
                            </div>
                        ) : (
                            hasTask
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
};

export default TaskList;
