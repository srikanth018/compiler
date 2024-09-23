// Output.jsx
import { useState } from "react";
import { Box, Button, Text, useToast, Input, VStack } from "@chakra-ui/react";
import { executeCode } from "../api";
import UserInput from "./UserInput";

const Output = ({ editorRef, language}) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);

  const [userInput, setUserInput] = useState("");
  // Function to handle running the code
  const runCode = async () => {
    let sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      setOutput(null);  // Clear previous output
      setIsError(false); // Reset error state

      // Simulate user input in the code by replacing customPrompt calls with actual input
      sourceCode = sourceCode.replace(/customPrompt\(".*"\)/g, `"${userInput}"`);

      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle user input submission
  const handleInputSubmit = () => {
    setIsWaitingForInput(false);
  };
  const handleUserInputSubmit = (input) => {
    setUserInput(input);
  };

  return (
    <Box w="300%">
      <Text mb={2} fontSize="lg">Output</Text>

      <Box
        height="53vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowY="scroll"
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>

<UserInput onInputSubmit={handleUserInputSubmit} />
      <Button
        variant="outline"
        colorScheme="green"
       
        mt={4}
        // ml={800}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>

      
    </Box>
  );
};

export default Output;
