import { Runner } from "./runner"

import fs from "fs";

export class GitCommand extends Runner {
    private path!: string;
    private url!: string;

    constructor(url: string, path: string) {
        super();

        this.url = url;
        this.path = path;
    }

    private getGitOptions(): string {
        const path: string = this.path
        const gitOptions: string = `--work-tree=${path} --git-dir=${path}/.git`;

        return gitOptions;
    }

    public clone() {
        const command: string = `git clone ${this.url} ${this.path}`;
        super.run(command);
    }

    public pull() {
        const command: string = `git ${this.getGitOptions()} pull --all`;
        super.run(command);
    }

    public checkout(branch: string) {
        const command: string = `git ${this.getGitOptions()} checkout ${branch}`;

        super.run(command);
    }

    public isGitClonned(): boolean {
        if (fs.existsSync(this.path)) {
            return true;
        }

        return false;
    }

}