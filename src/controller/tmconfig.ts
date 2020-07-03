import { FileService, GitService } from "../service"

class TmConfig {
    private static path: string = "/tmp/tmconfig"
    // 30 seconds
    private static time: number = 30000

    private gitService!: GitService;
    private fileService!: FileService;

    constructor() {
        this.fileService = new FileService(TmConfig.path);
        this.gitService = new GitService(TmConfig.path)

        this.gitService.start(TmConfig.time);
    }

    public loadConfig(moduleName: string): Record<string, unknown> | null  {
        let config = this.fileService.getConf(moduleName);
        
        if( config == null) {
            this.gitService.cloneOrUpdate();
            config = this.fileService.getConf(moduleName);
        }

        return config;
    }
}

//https://username:password@github.com/username/repository.git
process.env['https://gsdenystm:280614@Jd@github.com/trademasterbr/tmconfig.git']
process.env['master']

const config = new TmConfig();
const obj = config.loadConfig("tm-src-service")
console.log(obj);
