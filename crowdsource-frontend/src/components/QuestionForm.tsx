// src/components/QuestionForm.tsx
import React, { useState, FormEvent, useEffect } from 'react';
import GenericInput from './GenericInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addQuestion } from '../apis/apis';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface Category {
  id: string;
  name: string;
}


const initialFormState: NewQuestion = {
  title: '',
  description: '',
  category: '',
  created_by: 'd6ac1afe-60bd-46d3-a674-d44cd3520b5f'

};

const QuestionForm: React.FC = () => {
  const [formState, setFormState] = useState<NewQuestion>(initialFormState);

  const [categorys, setCategorys] = useState<Category[]>([]);

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch tags from the API
    axios.get('http://127.0.0.1:8000/api/category')
      .then(response => setCategorys(response.data))
      .catch(error => console.error('Error fetching tags:', error));
  }, []);

  const handleInputChange = (key: keyof NewQuestion) => (value: string) => {
    setFormState((prevFormState) => ({ ...prevFormState, [key]: value }));
  };

  const queryClient = useQueryClient();

  // Specify the type for your mutation result
  const mutation = useMutation({
    mutationFn: addQuestion, onError: (error) => { console.log(error) }, onSuccess: () => { console.log('success') }
  })



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Call the onSubmit callback with the form values

    await mutation.mutateAsync({ title: formState.title, description: formState.description, category: formState.category, created_by: formState.created_by })

    // Reset the form fields
    setFormState(initialFormState);
    navigate('/')
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
        <div className="mb-4">
          <label htmlFor="categorys" className="block text-sm font-medium text-gray-600">
            Categorys
          </label>
          <select
            id="categorys"
            name="categorys"
            value={formState.category}
            onChange={(e) => handleInputChange('category')(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="" disabled>Select a Category</option>
            {categorys.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

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
