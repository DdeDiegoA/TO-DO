import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/model/task.class.model";
import "../../styles/task.scss";
import { LEVELS } from "../../models/enum/level.enum.model";
import { Badge } from "react-bootstrap";

// * task => son los props que envian desde Task_list
const TaskComponent = ({ task, complete, deleteTask }) => {
    useEffect(() => {
        console.log("created task");
        return () => {
            console.log(`task ${task.name} is going to unmound`);
        };
    }, [task]);

    /**
     *  *function that returns a badge
     *  depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.normal:
                return (
                    <Badge bg="primary" className="m-0">
                        {task.level}
                    </Badge>
                );
            case LEVELS.urgent:
                return (
                    <Badge bg="warning" className="m-0">
                        {task.level}
                    </Badge>
                );
            case LEVELS.important:
                return (
                    <Badge bg="danger" className="m-0">
                        {task.level}
                    </Badge>
                );

            default:
                break;
        }
    }

    /**
     * *If the task is completed, return a green checkmark icon, otherwise return a red X icon.
     *  @returns the icon that is being used to display the status of the task.
     */
    function taskCompletedIcon() {
        if (task.completed) {
            return (
                <i
                    className="bi-toggle-on icon mx-2"
                    onClick={() => complete(task)}
                    style={{ color: "green", fontSize: "17pt" }}
                ></i>
            );
        } else {
            return (
                <i
                    onClick={() => complete(task)}
                    className="bi-toggle-off icon mx-2"
                    style={{ color: "red", fontSize: "17pt" }}
                ></i>
            );
        }
    }

    return (
        <tr className={task.completed ? "task-completed" : "task-pending"}>
            <td className="fw-bold">
                <span className="ms-2">{task.name}</span>
            </td>
            <td>
                <span className="ms-2">{task.description}</span>
            </td>
            <td>
                <span className="ms-2 center">{taskLevelBadge()}</span>
            </td>
            <td>
                {taskCompletedIcon()}
                <i
                    className="bi-trash-fill icon mx-2"
                    onClick={() => deleteTask(task)}
                    style={{ color: "tomato", fontSize: "17pt" }}
                ></i>
            </td>
        </tr>
    );
};

//* especificamos que task debe de ser una instancia de Task => clase =>models
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskComponent;
