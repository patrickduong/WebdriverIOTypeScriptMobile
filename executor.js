const { execSync } = require('child_process')
const { Select } = require('enquirer');
const { join } = require("path");
const { existsSync } = require('fs');
const TEST_MODULE = new Select({
    name: 'framework',
    message: 'Which test module you want to  run?',
    choices: ['Mobile']
})

const runnerCommand = {
    mobileRunner: () => { execSync('cd mobile&&npm run test', { stdio: 'inherit' }) },
}

const MOBILE_NODE_MODULES_PATH = join(process.cwd(), 'mobile', 'node_modules');

const isNodeModuleDoesNotExists = (path) => {
    if (!existsSync(path)) {
        console.log(`'node_modules' folder is missing!!! Starting installation...`);
        return true;
    }
    else return false;
}

const installerCommand = {
    mobile: () => { execSync('cd mobile&&npm install', { stdio: 'inherit' }) }
}

const nodeModuleInstaller = {
    mobile: () => {
        if (isNodeModuleDoesNotExists(MOBILE_NODE_MODULES_PATH))
            installerCommand.mobile();
    }
}

const configRunner = async () => {
    const answers = await TEST_MODULE.run();
    switch (answers) {
        case "Mobile":
            nodeModuleInstaller.mobile();
            runnerCommand.mobileRunner();
            break;
        default: throw new Error("only support mobile now")
    }
}

configRunner()