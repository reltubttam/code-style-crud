require('dotenv').config();

export const POSTGRES_URL = process.env.POSTGRES_URL || 'postgres://service:service@postgres:5432/stats';
export const PORT = process.env.PORT || 3000;
export const LRU_MAX_ENTRIES = 100;
