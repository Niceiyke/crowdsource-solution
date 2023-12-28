// src/components/QuestionForm.tsx
import React, { useState, FormEvent } from 'react';
import GenericInput from './GenericInput';

interface QuestionFormProps {
  onSubmit: (title: string, description: string, tags: string) => void;
}

interface FormState {
  title: string;
  description: string;
  tags: string;
}

const initialFormState: FormState = {
  title: '',
  description: '',
  tags: '',
};

const QuestionForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleInputChange = (key: keyof FormState) => (value: string) => {
    setFormState((prevFormState) => ({ ...prevFormState, [key]: value }));
  };

  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Call the onSubmit callback with the form values
   
  

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
        <GenericInput
          label="Tags"
          type="text"
          id="tags"
          value={formState.tags}
          onChange={handleInputChange('tags')}
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
