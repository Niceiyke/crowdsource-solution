// src/components/QuestionForm.tsx
import React, { useState, FormEvent } from 'react';
import GenericInput from './GenericInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addQuestion } from '../apis/apis';




const initialFormState: NewQuestion = {
  title: '',
  description: '',

};

const QuestionForm: React.FC = () => {
  const [formState, setFormState] = useState<NewQuestion>(initialFormState);

  const handleInputChange = (key: keyof NewQuestion) => (value: string) => {
    setFormState((prevFormState) => ({ ...prevFormState, [key]: value }));
  };

  const queryClient = useQueryClient();

  // Specify the type for your mutation result
  const mutation = useMutation<any, Error, NewQuestion>(addQuestion, {
    onSuccess: () => {
      // Invalidate and refetch the data after mutation succeeds
      queryClient.invalidateQueries('questions');
    },
  });



  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Call the onSubmit callback with the form values

    mutation.mutate({ title: formState.title, description: formState.description })



    // Reset the form fields
    setFormState(initialFormState);
  };

  return (
    <div className="bg-white p-4 shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <GenericInput
          label="Title"
          type="text"
          id="title"
          value={formState.title}
          onChange={handleInputChange('title')}
          required
        />
        <GenericInput
          label="Description"
          type="text"
          id="description"
          value={formState.description}
          onChange={handleInputChange('description')}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
