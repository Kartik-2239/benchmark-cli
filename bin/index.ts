import { runTest } from "../ModelManager"
import { MakeQuestions } from "../MakeQuestions"

async function main(){
    await MakeQuestions("One Piece anime", 5);
    await runTest();
}

main()
