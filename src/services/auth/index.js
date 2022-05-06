import dotenv from 'dotenv';

dotenv.config();
const READ_ONLY_GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_KEY;

export default READ_ONLY_GITHUB_TOKEN;
