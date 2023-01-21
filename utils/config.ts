import dotenv from 'dotenv';
dotenv.config();

export const INTER_BANK_CLIENT_ID = process.env.INTER_BANK_CLIENT_ID ?? 'client_id';
export const INTER_BANK_CLIENT_SECRET = process.env.INTER_BANK_CLIENT_SECRET ?? 'client_secret';
export const INTER_BANK_CRT = process.env.INTER_BANK_CRT ?? 'crt';
export const INTER_BANK_KEY = process.env.INTER_BANK_KEY ?? 'key';