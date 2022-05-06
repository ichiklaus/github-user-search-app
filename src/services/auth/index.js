import dotenv from 'dotenv';
// const ONLY_READ_ACCESS_TOKEN = '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';
// export default { ONLY_READ_ACCESS_TOKEN };

dotenv.config();
const READ_ONLY_GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_KEY;
export default READ_ONLY_GITHUB_TOKEN;
