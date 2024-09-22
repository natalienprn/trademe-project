import axios from 'axios';

const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;  // Assuming you're using environment variables
const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;

const airtableAxios = axios.create({
  baseURL: `https://api.airtable.com/v0/${BASE_ID}`,
  headers: {
    Authorization: `Bearer ${API_KEY}`,  // Ensure API key is passed correctly
  },
});

export default airtableAxios;
