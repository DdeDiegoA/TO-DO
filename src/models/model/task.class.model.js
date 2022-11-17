import { LEVELS } from "../enum/level.enum.model";

export class Task {
    name = "";
    description = "";
    completed = false;
    level = LEVELS.normal;

    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}
