// UserInput.jsx
import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

const UserInput = ({ onInputSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    if (userInput.trim() !== "") {
      onInputSubmit(userInput);
      setUserInput("");
    }
  };

  return (
    <Box mt={4} >
      <Input
        placeholder="Enter input"
        value={userInput}
        onChange={handleChange}
        mb={2}
      />
      <Button colorScheme="blue" onClick={handleSubmit} mt={4} >
        Submit Input
      </Button>
    </Box>
  );
};

export default UserInput;
