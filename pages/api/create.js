import pool from '../../db';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { yourDataFields } = req.body;
        try {
            const result = await pool.query('INSERT INTO yourTableName (column1, column2)VALUES ($1, $2) RETURNING *', [yourDataFields.column1, yourDataFields.column2]);
            res.status(200).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}