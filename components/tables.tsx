import React from 'react'
import { Box, render, Text } from 'ink';
import type { model } from '../constants';
import type { currentStatus } from '..';

export const TableProvider = ({ models }: { models: currentStatus[] }) => {
  return (
    <Box flexDirection="column" gap={1}>
      <Box flexDirection='row' gap={2}>
          <Box width={20}>
            <Text>model_name</Text>
          </Box>
          <Box width={5}>
            <Text>progress</Text>
          </Box>
          <Box width={5}>
            <Text>accuracy</Text>
          </Box>
          <Box width={5}>
            <Text>cost</Text>
          </Box>
        </Box>
      {models.map((model, index) => (
        <Box key={index} flexDirection='row' gap={2}>
          <Box width={20}>
            <Text>{model.model_name}</Text>
          </Box>
          <Box width={5}>
            <Text>{model.progress}</Text>
          </Box>
          <Box width={5}>
            <Text>{model.accuracy}</Text>
          </Box>
          <Box width={5}>
            <Text>{model.cost}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

function run(models: currentStatus[]){
  render(<TableProvider models={models}/>)
}
export default run;
