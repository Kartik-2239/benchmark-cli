import { runTest } from "../src/ModelManager"
import { MakeQuestions } from "../src/MakeQuestions"
import readline from "readline"
import { argv } from "process"

if (argv[2] === "--help" || argv[2] === "-h" || argv.length === 2){
    console.log("Welcome to the benchmark-cli")
    console.log("-----------------------------------------------------------")
    console.log("Usage:                                                    |")
    console.log("  --run                      Run benchmark tests          |")
    console.log("  --create                   Interactive question creator |")
    // console.log("  --create -o                Use own question set         |")
    // console.log("  --create -t <topic>        Set topic                    |")
    // console.log("  --create -n <5-100>        Set number of questions      |")
    console.log("-----------------------------------------------------------")
}


function parseCreateArgs(): { ownData?: boolean; topic?: string; numQuestions?: number } {
    const args: { ownData?: boolean; topic?: string; numQuestions?: number } = {};
    
    for (let i = 3; i < argv.length; i++) {
        const arg = argv[i];
        
        if (arg === "-o") {
            args.ownData = true;
        } else if (arg === "-t" && argv[i + 1]) {
            args.topic = argv[i + 1];
            i++; // skip next arg
        } else if (arg === "-n" && argv[i + 1]) {
            const num = parseInt(argv[i + 1] as string);
            if (!isNaN(num) && num >= 5 && num <= 100) {
                args.numQuestions = num;
            }
            i++; // skip next arg
        }
    }
    
    return args;
}

if (argv[2] === "--run"){
    await runTest();
    process.exit(0);
}

if (argv[2] === "--create"){
    const parsedArgs = parseCreateArgs();
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    if (parsedArgs.ownData) {
        console.log("Make sure your question set is in questions/test.json");
        console.log("Run --run to start the benchmark.");
        rl.close();
        process.exit(0);
    }
    
    if (parsedArgs.topic && parsedArgs.numQuestions) {
        console.log(`Creating ${parsedArgs.numQuestions} questions about "${parsedArgs.topic}"...`);
        await MakeQuestions(parsedArgs.topic, parsedArgs.numQuestions);
        console.log("\nQuestion set created! Run --run to start the benchmark.");
        rl.close();
        process.exit(0);
    }
    
    if (parsedArgs.topic) {
        askNumQuestions(parsedArgs.topic);
    } else if (parsedArgs.numQuestions) {
        askTopic(parsedArgs.numQuestions);
    } else {
        makeQuestions();
    }

    function askTopic(numQuestions: number) {
        rl.question("Enter the topic (put some text files in docs/ for better quality): ", async (topic) => {
            if (topic.trim().length < 3){
                console.log("Topic must be at least 3 characters long");
                rl.close();
                return;
            }
            console.log(`Creating ${numQuestions} questions about "${topic}"...`);
            await MakeQuestions(topic, numQuestions);
            console.log("\nQuestion set created! Run --run to start the benchmark.");
            rl.close();
        })
    }

    function askNumQuestions(topic: string) {
        rl.question("Enter the number of questions (5-100): ", async (numberOfQuestions) => {
            const num = parseInt(numberOfQuestions);
            if (isNaN(num)){
                console.log("Number of questions must be a number");
                rl.close();
                return;
            }
            if (num < 5 || num > 80){
                console.log("Number of questions must be between 5 and 80");
                rl.close();
                return;
            }
            console.log(`Creating ${num} questions about "${topic}"...`);
            await MakeQuestions(topic, num);
            console.log("\nQuestion set created! Run --run to start the benchmark.");
            rl.close();
        })
    }

    function makeQuestions(){
        rl.question("Enter the topic (put some text files in docs/ for better quality): ", async (topic) => {
            if (topic.trim().length < 3){
                console.log("Topic must be at least 3 characters long");
                rl.close();
                return;
            }
            rl.question("Enter the number of questions (5-100): ", async (numberOfQuestions) => {
                const num = parseInt(numberOfQuestions);
                if (isNaN(num)){
                    console.log("Number of questions must be a number");
                    rl.close();
                    return;
                }
                if (num < 5 || num > 100){
                    console.log("Number of questions must be between 5 and 100");
                    rl.close();
                    return;
                }
                console.log(`Creating ${num} questions about "${topic}"...`);
                await MakeQuestions(topic, num);
                console.log("\nQuestion set created! Run --run to start the benchmark.");
                rl.close();
            })
        })
    }
}



// async function main(){
//     await MakeQuestions("One Piece anime", 5);
//     await runTest();
// }

// main()
