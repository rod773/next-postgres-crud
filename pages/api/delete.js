import pool from '../../db';
export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;
        try {
            await pool.query('DELETE FROM yourTableName WHERE id = $1', [id]);
            res.status(200).json({ message: 'Deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}