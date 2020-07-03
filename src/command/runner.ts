import { execSync } from "child_process"

export abstract class Runner {
    public run(command: string) {
        execSync(command)
    }
}