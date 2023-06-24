import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host:'localhost',
    database: 'gastos_web',
    user: 'root',
    password: 'ServilyLulu123',
  },
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}