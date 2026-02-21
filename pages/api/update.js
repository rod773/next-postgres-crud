import pool from '../../db';
export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, updatedData } = req.body;
        try {
            const result = await pool.query('UPDATE yourTableName SET column1 = $1, column2 =$2 WHERE id = $3 RETURNING *', [updatedData.column1, updatedData.column2, id]);
            res.status(200).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}