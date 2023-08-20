import React from 'react';
import styled from '@emotion/styled';
import { Box, FormControl, TextField } from '@mui/material';

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  position: relative;
`;

const TextFieldWrapper = styled(FormControl)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonWrapper = styled(FormControl)`
  position: absolute;
  left: calc(50% + 6em);
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

interface Props {
  chord: string
  setChord: (chord: string) => void
  setModalOpen: (open: boolean) => void
  searchBy: string
  setSearchBy: (searchBy: string) => void
}

const Form: React.FC<Props> = ({
  chord,
  setChord,
  setModalOpen,
  searchBy,
  setSearchBy,
}) => {
  return (
    <Wrapper>
      <TextFieldWrapper>
        <TextField
          id='chord'
          variant='standard'
          placeholder='Cmaj7/G'
          inputProps={{ style: { textAlign: 'center' } }}
          value={searchBy === "name" ? chord : chord}
          onChange={(e: any) => { setChord(e?.target?.value || ''); setSearchBy('name') }}
        />
      </TextFieldWrapper>
      <ButtonWrapper>
        <p onClick={() => setModalOpen(true)}>?</p>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Form;
