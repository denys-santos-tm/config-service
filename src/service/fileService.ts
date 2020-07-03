import { Runner } from "../command/runner"
import fs from "fs";

export class FileService {
    private static confExtension: string = ".json"
    private path!: string;

    constructor(path: string) {
        this.path = path;
    }

    public getConf(name: string): Record<string, unknown> | null {
        let conf: Record<string, unknown> | null = null;
        
        try {
            conf = require(`${this.path}/${name}${FileService.confExtension}`);
        } catch (err) {
            console.error(err);
        }

        return conf;
    }
}