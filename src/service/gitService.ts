import { GitCommand } from "../command/gitCommand";

export class GitService {
    private static envUrl: string = "git.url"
    private static envBranch: string = "git.branch" 

    private url: string = "git@github.com:trademasterbr/tmconfig.git";
    private branch: string = "master";

    private path!: string;
    private command!: GitCommand;

    constructor(path: string) {
        this.path = path;

        this.url = process.env[GitService.envUrl] || this.url;
        this.branch = process.env[GitService.envBranch] || this.branch;

        this.command = new GitCommand(this.url, this.path);
    }

    public cloneOrUpdate() {
        if (this.command.isGitClonned()) {
            this.command.pull();
        } else {
            this.command.clone();
        }
    }

    public start(tmp: number) {
        this.cloneOrUpdate();

        const that = this;
        setInterval(function () { that.cloneOrUpdate(); }, tmp);
    }
}


