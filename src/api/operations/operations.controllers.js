import {connect} from '../../database';

export const createOperation = async (req, res) => {
    
    try{
        const { user_id, category_id, concept, amount, type} = req.body;
        const con = connect();
        await con.query(`INSERT INTO operations (concept, amount, type) VALUES ('${concept}',${amount},${type})`)
        res.status(201).json({data: 'ok'});
    }
    catch(e){
        res.status(500).json({error: 'error'})
    }
}

export const getOperations = async (req, res) => {

    try{
        const con = connect();
        const [rows, buf] = await con.query('SELECT * FROM operations ORDER BY date ASC')
        res.status(200).json(rows)
    }catch(e){
        res.status(500).json({error: 'error'})
    }
}

export const getOperationById = async (req, res) => {
    
    try{
        const con = connect();
        const [rows, buf] = await con.query(`SELECT * FROM operations WHERE id_operation = ${req.params.id} `)
        res.status(200).send(rows)
    }catch(e){
        res.status(500).json({error: 'error'})
    }
}

export const updateOperationById = async (req, res) => {
    
    try{
        const { user_id, category_id, concept, amount, type} = req.body;
        const con = connect();
        const resp = await con.query(`UPDATE operations SET concept = '${concept}', amount = ${amount} WHERE id_operation = ${req.params.id}`);
        res.status(201).json({data: 'ok'});
    }
    catch(e){
        console.log(e)
        res.status(500).json({error: 'error'})
    }
}

export const deleteOperationById = async (req, res) => {
    try{
        const con = connect();
        const resp = await con.query(`DELETE FROM operations WHERE id_operation = ${req.params.id}`);
        res.status(200).json({data: 'ok'})
    }catch(e){
        res.status(500)
    }
}