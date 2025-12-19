# benchmark-cli

Tiny Bun CLI to benchmark multiple LLMs on a question set and show a live table in the terminal.
(currently only for nebius, will add openrouter)

## Run
```bash
bun install
export NEBIUS_API_KEY="..."
bun run start
```

## Configure

- **Models**: edit `constants.ts` (`models`)
- **Questions**: edit `questions/test.json`
- **Logs**: written to `logs/<model-name>.log`

## Install as a command (optional)

```bash
bun link
benchmark-cli
```
